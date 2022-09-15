const productsModel = require('../models/products.model');
const { HTTP_NOT_FOUND, HTTP_OK_SUCCESS } = require('../utils/customMessage');

const listProducts = async () => {
  const products = await productsModel.listProducts();
  return products;
};

const listProductById = async (productId) => {
  const product = await productsModel.listProductById(productId);

  if (product && product.length === 0) {
    return { statusCode: HTTP_NOT_FOUND, result: 'Product not found' };
  }
  return { statusCode: HTTP_OK_SUCCESS, result: product };
};

module.exports = {
  listProducts,
  listProductById,
};
