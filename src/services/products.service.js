const productsModel = require('../models/products.model');
const { HTTP_OK_SUCCESS, HTTP_CREATED, HTTP_BAD_REQUEST } = require('../utils/customMessage');

const addProduct = async (newProduct) => {
  const id = await productsModel.addProduct(newProduct);
  return { type: HTTP_CREATED, message: { id, ...newProduct } };
};

const listProducts = async () => {
  const products = await productsModel.listProducts();
  return { type: HTTP_OK_SUCCESS, message: products };
};

const listProductById = async (productId) => {
  const product = await productsModel.listProductById(productId);

  return { type: HTTP_OK_SUCCESS, message: product };
};

const updateProduct = async (nameProduct, productId) => {
  try {
    await productsModel.updateProduct(nameProduct, productId);
    return { type: HTTP_OK_SUCCESS, message: { id: productId, name: nameProduct } };
  } catch (error) {
    return { type: HTTP_BAD_REQUEST, message: error };
  }
};

module.exports = {
  addProduct,
  listProductById,
  listProducts,
  updateProduct,
};
