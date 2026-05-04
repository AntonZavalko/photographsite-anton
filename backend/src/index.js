const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Імпорт маршрутів
const contactsRoutes = require('./routes/contacts');
const ordersRoutes = require('./routes/orders');

app.use('/api/contacts', contactsRoutes);
app.use('/api/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});