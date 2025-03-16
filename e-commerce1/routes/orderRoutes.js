const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, createOrder);
router.get('/user', protect, getUserOrders);
router.get('/', protect, adminOnly, getAllOrders);

module.exports = router;
