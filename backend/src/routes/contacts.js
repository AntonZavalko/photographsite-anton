const express = require('express');
const { saveContact, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/', saveContact);
router.get('/', getContacts);

module.exports = router;