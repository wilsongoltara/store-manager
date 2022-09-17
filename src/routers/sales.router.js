const router = require('express').Router();
const salesController = require('../controllers/sales.controller');
const { validationProductId, validationQuantity } = require('../middlewares/salesValidation');

// GET
router.get('/', salesController.listSales);
router.get('/:id', salesController.listSaleById);

// POST
router.post('/', validationQuantity, validationProductId, salesController.addSales);

module.exports = router;
