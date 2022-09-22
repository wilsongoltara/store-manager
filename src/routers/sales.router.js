const salesRouter = require('express').Router();
const salesController = require('../controllers/sales.controller');
const {
  validationProductId,
  validationQuantity,
  validationSale,
} = require('../middlewares/salesValidation');

// GET
salesRouter.get('/', salesController.listSales);
salesRouter.get('/:id', validationSale, salesController.listSaleById);

// POST
salesRouter.post(
  '/',
  validationQuantity,
  validationProductId,
  salesController.addSales,
);

// PUT
// productsRouter.put(
//   '/:id',
//   validationProduct,
//   validationNameProduct,
//   productsController.updateProduct,
// );

// DELETE
salesRouter.delete(
  '/:id',
  validationSale,
  salesController.deleteSale,
);

module.exports = salesRouter;
