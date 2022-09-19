const {
  HTTP_BAD_REQUEST,
  HTTP_NOT_FOUND,
  HTTP_UNPROCESSABLE_ENTITY,
} = require('../utils/customMessage');
const productsModel = require('../models/products.model');
const salesModel = require('../models/sales.model');

const validationSale = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const sales = await salesModel.listSaleById(id);

    if (!sales || sales.length === 0) {
      return res.status(HTTP_NOT_FOUND).json({ message: 'Sale not found' });
    }

    next();
  } catch (error) {
    return error;
  }
};

const validationProductId = async (req, res, next) => {
  const { body } = req;

  const hasProductId = body.some(
    (sale) => sale.productId === undefined || sale.productId === null,
  );

  const listProducts = await Promise.all(
    body.map((sale) => productsModel.listProductById(sale.productId)),
  );
  const notFoundProduct = listProducts.some((product) => product.length === 0);

  if (hasProductId) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: '"productId" is required' });
  }

  if (notFoundProduct) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Product not found' });
  }

  next();
};

const validationQuantity = (req, res, next) => {
  const { body } = req;
  const hasQuantity = body.some(
    (sale) => sale.quantity === undefined || sale.quantity === null,
  );
  const hasQuantityValid = body.some((sale) => sale.quantity <= 0);

  if (hasQuantityValid) {
    return res
      .status(HTTP_UNPROCESSABLE_ENTITY)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  if (hasQuantity) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = {
  validationProductId,
  validationQuantity,
  validationSale,
};
