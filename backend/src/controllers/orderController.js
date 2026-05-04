const pool = require('../db/database');

const saveOrder = async (req, res) => {
  const { orderNumber, client, items, totalAmount, comment } = req.body;
  
  try {
    const result = await pool.query(
      `INSERT INTO orders (order_number, client_name, client_email, client_phone, items, total_amount, comment, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
      [orderNumber, client.fullName, client.email, client.phone, JSON.stringify(items), totalAmount, comment || null, 'pending']
    );
    
    res.status(201).json({ 
      success: true, 
      message: 'Order saved successfully',
      id: result.rows[0].id 
    });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
    res.json({ success: true, orders: result.rows });
  } catch (error) {
    console.error('Error getting orders:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { saveOrder, getOrders };