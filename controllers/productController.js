// controllers/productController.js

const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const { uploadProductImage } = require('./uploadsController'); // Import the uploadProductImage controller

const createProduct = async (req, res) => {
  // Create the product
};

const getAllProducts = async (req, res) => {
  // Get all products
};

const getImageUrls = async (images) => {
  // Get image URLs
};

const getProductsByName = async (req, res) => {
  try {
    const { itemName } = req.query;
    const products = await Product.find({ itemName: { $regex: new RegExp(itemName, 'i') } });
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    console.error('Error fetching products by name:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getImageUrls,
  getProductsByName, 
};
