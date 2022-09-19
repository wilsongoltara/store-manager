const productsModel = require('../models/products.model');
const {
  HTTP_OK_SUCCESS,
  HTTP_CREATED,
} = require('../utils/customMessage');

const addProduct = async (newProduct) => {
  try {
    const id = await productsModel.addProduct(newProduct);
    return { type: HTTP_CREATED, message: { id, ...newProduct } };
  } catch (error) {
    return error;
  }
};

const listProducts = async () => {
  try {
    const products = await productsModel.listProducts();
    return { type: HTTP_OK_SUCCESS, message: products };
  } catch (error) {
    return error;
  }
};

const listProductById = async (productId) => {
  try {
    const product = await productsModel.listProductById(productId);
    return { type: HTTP_OK_SUCCESS, message: product };
  } catch (error) {
    return error;
  }
};

const updateProduct = async (nameProduct, productId) => {
  try {
    await productsModel.updateProduct(nameProduct, productId);
    return {
      type: HTTP_OK_SUCCESS,
      message: { id: productId, name: nameProduct },
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  addProduct,
  listProductById,
  listProducts,
  updateProduct,
};
