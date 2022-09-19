const productsService = require('../services/products.service');

const addProduct = async (req, res) => {
  try {
    const { body } = req;
    const { type, message } = await productsService.addProduct(body);
    return res.status(type).json(message);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const listProducts = async (_req, res) => {
  try {
    const { type, message } = await productsService.listProducts();
    return res.status(type).json(message);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const listProductById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { type, message } = await productsService.listProductById(id);
    return res.status(type).json(...message);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      params: { id },
      body: { name },
    } = req;
    const { type, message } = await productsService.updateProduct(name, id);
    return res.status(type).json(message);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const { type } = await productsService.deleteProduct(id);
    return res.sendStatus(type);
  } catch (error) {
    return error;
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  listProductById,
  listProducts,
  updateProduct,
};
