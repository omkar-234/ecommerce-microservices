const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'ecommerce'
});

app.get('/orders', (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post('/orders', (req, res) => {
  const { product_id, quantity } = req.body;
  db.query('INSERT INTO orders (product_id, quantity) VALUES (?, ?)',
    [product_id, quantity],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, product_id, quantity });
    }
  );
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'order-service' });
});

app.listen(3000, () => console.log('Order service running on port 3000'));
