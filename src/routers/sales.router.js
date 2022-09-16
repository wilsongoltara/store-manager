const router = require('express').Router();
const salesController = require('../controllers/sales.controller');
const { validationProductId, validationQuantity } = require('../middlewares/salesValidation');

router.post('/', validationQuantity, validationProductId, salesController.addSales);

module.exports = router;
