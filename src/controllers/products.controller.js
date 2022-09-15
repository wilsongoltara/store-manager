const productsService = require('../services/products.service');
const { HTTP_OK_SUCCESS } = require('../utils/customMessage');

const listProducts = async (_req, res) => {
  const products = await productsService.listProducts();
  res.status(HTTP_OK_SUCCESS).json(products);
};

const listProductById = async (req, res) => {
  const { params: { id } } = req;
  const { statusCode, result } = await productsService.listProductById(id);
  if (statusCode === 404) return res.status(statusCode).json({ message: result });
  return res.status(statusCode).json(...result);
};

module.exports = {
  listProducts,
  listProductById,
};
