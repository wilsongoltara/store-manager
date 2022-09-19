const productsService = require('../services/products.service');

const addProduct = async (req, res) => {
  const newProduct = req.body;
  const { type, message } = await productsService.addProduct(newProduct);
  return res.status(type).json(message);
};

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.listProducts();
  return res.status(type).json(message);
};

const listProductById = async (req, res) => {
  const { params: { id } } = req;
  const { type, message } = await productsService.listProductById(id);

  return res.status(type).json(...message);
};

const updateProduct = async (req, res) => {
  const { params: { id }, body: { name } } = req;
  const { type, message } = await productsService.updateProduct(name, id);

  return res.status(type).json(message);
};

module.exports = {
  addProduct,
  listProductById,
  listProducts,
  updateProduct,
};
