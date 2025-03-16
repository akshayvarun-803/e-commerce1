const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  totalPrice: Number,
  status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
