const productsModel = require('../models/products.model');
const {
  HTTP_OK_SUCCESS,
  HTTP_CREATED,
  HTTP_DELETED,
} = require('../utils/customMessage');

const addProduct = async (newProduct) => {
  try {
    const id = await productsModel.addProduct(newProduct);
    return { type: HTTP_CREATED, message: { id, ...newProduct } };
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (productId) => {
  try {
    await productsModel.deleteProduct(productId);
    return { type: HTTP_DELETED };
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
    const product = await productsModel.listProductById(Number(productId));
    return { type: HTTP_OK_SUCCESS, message: product };
  } catch (error) {
    return error;
  }
};

const listProductByName = async (productName) => {
  try {
    const products = await productsModel.listProducts();
    const productsByName = products
      .filter((product) => product.name.includes(productName));

    return { type: HTTP_OK_SUCCESS, message: productsByName };
  } catch (error) {
    return error;
  }
};

const updateProduct = async (nameProduct, productId) => {
  try {
    await productsModel.updateProduct(nameProduct, Number(productId));
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
  listProductByName,
  listProducts,
  updateProduct,
  deleteProduct,
};
