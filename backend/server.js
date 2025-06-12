// backend/server.js
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT 1 + 1 AS solution');
    res.json({ message: 'Conexão com o banco de dados bem-sucedida!', solution: rows[0].solution });
  } catch (error) {
    console.error('Erro na rota /test-db:', error);
    res.status(500).json({ message: 'Erro ao conectar ao banco de dados.', error: error.message });
  }
});

// Adicione aqui outras rotas da sua API (como as de pagamento do Mercado Pago)

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});