const productsRouter = require('express').Router();
const productsController = require('../controllers/products.controller');

productsRouter.get('/', productsController.listProducts);
productsRouter.get('/:id', productsController.listProductById);

module.exports = productsRouter;
