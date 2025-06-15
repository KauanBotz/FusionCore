// backend/config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: './backend/.env' });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
pool.getConnection()
  .then(connection => {
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
    connection.release();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados MySQL:', err.message);
    process.exit(1);
  });

export default pool;