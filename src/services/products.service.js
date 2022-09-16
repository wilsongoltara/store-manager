const productsModel = require('../models/products.model');
const { HTTP_NOT_FOUND, HTTP_OK_SUCCESS, HTTP_CREATED } = require('../utils/customMessage');

const listProducts = async () => {
  const products = await productsModel.listProducts();
  return products;
};

const listProductById = async (productId) => {
  const product = await productsModel.listProductById(productId);

  if (product && product.length === 0) {
    return { type: HTTP_NOT_FOUND, message: 'Product not found' };
  }
  return { type: HTTP_OK_SUCCESS, message: product };
};

const addProduct = async (newProduct) => {
  const id = await productsModel.addProduct(newProduct);
  return { type: HTTP_CREATED, message: { id, ...newProduct } };
};

module.exports = {
  listProducts,
  listProductById,
  addProduct,
};
