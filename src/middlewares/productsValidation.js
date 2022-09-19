const productsModel = require('../models/products.model');
const {
  HTTP_BAD_REQUEST,
  HTTP_UNPROCESSABLE_ENTITY,
  HTTP_NOT_FOUND,
} = require('../utils/customMessage');

const validationNameProduct = (req, res, next) => {
  const {
    body: { name },
  } = req;

  if (!name) { return res.status(HTTP_BAD_REQUEST).json({ message: '"name" is required' }); }
  if (name && name.length < 5) {
    return res
      .status(HTTP_UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validationProduct = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const product = await productsModel.listProductById(id);

  if (!product || product.length === 0) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { validationProduct, validationNameProduct };
