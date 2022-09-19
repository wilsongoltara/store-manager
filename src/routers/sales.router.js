const routerSales = require('express').Router();
const salesController = require('../controllers/sales.controller');
const {
  validationProductId,
  validationQuantity,
  validationSale,
} = require('../middlewares/salesValidation');

// GET
routerSales.get('/', salesController.listSales);
routerSales.get('/:id', validationSale, salesController.listSaleById);

// POST
routerSales.post(
  '/',
  validationQuantity,
  validationProductId,
  salesController.addSales,
);

module.exports = routerSales;
