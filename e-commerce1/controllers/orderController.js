const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { products, totalPrice } = req.body;
  const order = new Order({ userId: req.user.id, products, totalPrice });
  await order.save();
  res.status(201).json(order);
};

const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('userId', 'name email');
  res.json(orders);
};

module.exports = { createOrder, getUserOrders, getAllOrders };
