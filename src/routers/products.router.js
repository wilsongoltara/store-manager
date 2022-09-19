const productsRouter = require('express').Router();
const productsController = require('../controllers/products.controller');
const {
  validationNameProduct,
  validationProduct,
} = require('../middlewares/productsValidation');

// GET
productsRouter.get('/', productsController.listProducts);
productsRouter.get(
  '/:id',
  validationProduct,
  productsController.listProductById,
);

// POST
productsRouter.post('/', validationNameProduct, productsController.addProduct);

// PUT
productsRouter.put(
  '/:id',
  validationProduct,
  validationNameProduct,
  productsController.updateProduct,
);

// DELETE
productsRouter.delete(
  '/:id',
  validationProduct,
  productsController.deleteProduct,
);

module.exports = productsRouter;
