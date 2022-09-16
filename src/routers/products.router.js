const productsRouter = require('express').Router();
const productsController = require('../controllers/products.controller');
const { validationNameProduct } = require('../middlewares/productsValidation');

// GET
productsRouter.get('/', productsController.listProducts);
productsRouter.get('/:id', productsController.listProductById);

// POST
productsRouter.post('/', validationNameProduct, productsController.addProduct);

module.exports = productsRouter;
