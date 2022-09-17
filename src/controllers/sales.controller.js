const salesService = require('../services/sales.service');

const addSales = async (req, res) => {
  const newProduct = req.body;
  const { type, message } = await salesService.addSales(newProduct);

  return res.status(type).json(message);
};

const listSales = async (_req, res) => {
  const { type, message } = await salesService.listSales();

  return res.status(type).json(message);
};

const listSaleById = async (req, res) => {
  const { params: { id } } = req;

  const { type, message } = await salesService.listSaleById(id);

  if (type === 404) return res.status(type).json({ message });
  return res.status(type).json(message);
};

module.exports = {
  addSales,
  listSales,
  listSaleById,
};
