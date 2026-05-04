const express = require('express');
const { saveOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/', saveOrder);
router.get('/', getOrders);

module.exports = router;