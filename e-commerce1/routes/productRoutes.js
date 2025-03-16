const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public Routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Protected Routes (optional auth middleware)
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
