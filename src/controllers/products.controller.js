const productsService = require('../services/products.service');
const { HTTP_OK_SUCCESS } = require('../utils/customMessage');

const addProduct = async (req, res) => {
  const newProduct = req.body;
  const { type, message } = await productsService.addProduct(newProduct);
  return res.status(type).json(message);
};

const listProducts = async (_req, res) => {
  const products = await productsService.listProducts();
  return res.status(HTTP_OK_SUCCESS).json(products);
};

const listProductById = async (req, res) => {
  const { params: { id } } = req;
  const { type, message } = await productsService.listProductById(id);

  if (type === 404) return res.status(type).json({ message });

  return res.status(type).json(...message);
};

module.exports = {
  listProducts,
  listProductById,
  addProduct,
};
