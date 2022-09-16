const salesService = require('../services/sales.service');

const addSales = async (req, res) => {
  const newProduct = req.body;
  const { type, message } = await salesService.addSales(newProduct);

  res.status(type).json(message);
};

module.exports = {
  addSales,
};
