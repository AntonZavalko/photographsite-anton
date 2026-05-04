const pool = require('../db');

const saveContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, phone, message]
    );
    
    res.status(201).json({ 
      success: true, 
      message: 'Contact saved successfully',
      id: result.rows[0].id 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const getContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json({ success: true, contacts: result.rows });
  } catch (error) {
    console.error('Error getting contacts:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { saveContact, getContacts };