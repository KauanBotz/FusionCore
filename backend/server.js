// backend/server.js
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';
import mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config({ path: './backend/.env' }); // Carrega as variáveis do arquivo .env do backend

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar as credenciais do Mercado Pago
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Essencial para webhooks do Mercado Pago

// Rota de exemplo para testar a conexão com o banco de dados
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT 1 + 1 AS solution');
    res.json({ message: 'Conexão com o banco de dados bem-sucedida!', solution: rows[0].solution });
  } catch (error) {
    console.error('Erro na rota /test-db:', error);
    res.status(500).json({ message: 'Erro ao conectar ao banco de dados.', error: error.message });
  }
});
app.post('/api/create-payment-preference', async (req, res) => {
  const { userId, productId, amount, planType } = req.body;

  if (!userId || !productId || !amount) {
    return res.status(400).json({ message: 'Dados de compra incompletos.' });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [orderInsertResult] = await connection.execute(
      'INSERT INTO orders (user_id, product_or_plan_id, amount, currency, status) VALUES (?, ?, ?, ?, ?)',
      [userId, productId, amount, 'BRL', 'pending']
    );
    const orderId = orderInsertResult.insertId;

    const preference = {
      items: [
        {
          title: `Sistema ID ${productId} - Plano ${planType}`,
          unit_price: parseFloat(amount),
          quantity: 1,
        },
      ],
      back_urls: {
        success: `${process.env.FRONTEND_URL}/purchase-success?order_id=${orderId}`,
        failure: `${process.env.FRONTEND_URL}/purchase-failure?order_id=${orderId}`,
        pending: `${process.env.FRONTEND_URL}/purchase-pending?order_id=${orderId}`,
      },
      auto_return: 'approved',
      external_reference: orderId.toString(),
      notification_url: `${process.env.BACKEND_URL}/mercadopago-webhook?source=backend`,
    };

    const mpResponse = await mercadopago.preferences.create(preference);
    
    await connection.commit();

    res.json({
      message: 'Preferência de pagamento criada com sucesso!',
      id: mpResponse.body.id,
      init_point: mpResponse.body.init_point
    });

  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    console.error('Erro ao criar preferência de pagamento:', error);
    res.status(500).json({ message: 'Erro interno ao processar o pagamento.', error: error.message });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// Endpoint de Webhook do Mercado Pago
app.post('/mercadopago-webhook', async (req, res) => {
  const { id, topic } = req.query;

  console.log(`Webhook recebido: topic=${topic}, id=${id}`);
  console.log('Dados do Webhook:', req.body);

  if (topic === 'payment') {
    let connection;
    try {
      connection = await pool.getConnection();
      await connection.beginTransaction();

      const paymentInfo = await mercadopago.payment.findById(id);
      const payment = paymentInfo.body;

      const externalReference = payment.external_reference;

      if (!externalReference || isNaN(parseInt(externalReference))) {
        console.error('External reference inválida ou ausente:', externalReference);
        await connection.rollback();
        return res.status(400).send('Referência externa inválida.');
      }

      const orderId = parseInt(externalReference);

      await connection.execute(
        'UPDATE orders SET status = ?, mercadopago_payment_id = ?, mercadopago_status_detail = ?, payment_method_type = ?, installments = ? WHERE id = ?',
        [
          payment.status,
          payment.id,
          payment.status_detail,
          payment.payment_type_id,
          payment.installments,
          orderId
        ]
      );

      if (payment.status === 'approved') {
        const [orderRows] = await connection.execute(
          'SELECT user_id, product_or_plan_id FROM orders WHERE id = ?',
          [orderId]
        );

        if (orderRows.length > 0) {
          const { user_id, product_or_plan_id } = orderRows[0];
          
          // Lógica de ativação da assinatura na tabela `subscriptions`
          const [subscriptionCheck] = await connection.execute(
            'SELECT id FROM subscriptions WHERE user_id = ? AND product_or_plan_id = ?',
            [user_id, product_or_plan_id]
          );

          if (subscriptionCheck.length === 0) {
            await connection.execute(
              'INSERT INTO subscriptions (user_id, product_or_plan_id, status, start_date, next_billing_date) VALUES (?, ?, ?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 1 MONTH))',
              [user_id, product_or_plan_id, 'active']
            );
            console.log(`Assinatura ativa para o usuário ${user_id} e produto ${product_or_plan_id}`);
          } else {
            await connection.execute(
              'UPDATE subscriptions SET status = ?, next_billing_date = DATE_ADD(next_billing_date, INTERVAL 1 MONTH) WHERE user_id = ? AND product_or_plan_id = ?',
              ['active', user_id, product_or_plan_id]
            );
            console.log(`Assinatura atualizada para o usuário ${user_id} e produto ${product_or_plan_id}`);
          }
        }
      }

      await connection.commit();
      res.status(200).send('Webhook recebido e processado.');

    } catch (error) {
      if (connection) {
        await connection.rollback();
      }
      console.error('Erro ao processar webhook do Mercado Pago:', error);
      res.status(500).send('Erro ao processar webhook.');
    } finally {
      if (connection) {
        connection.release();
      }
    }
  } else {
    res.status(200).send('Tipo de webhook não tratado.');
  }
});


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
  console.log(`Para testes locais: http://localhost:${PORT}/test-db`);
});