const Product = require('../models/Product');

// GET all
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// GET by ID
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
};

// CREATE
exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.status(201).json(saved);
};

// UPDATE
exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).json({ error: 'Not found' });
};

// DELETE
exports.deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: 'Deleted successfully' }) : res.status(404).json({ error: 'Not found' });
};
