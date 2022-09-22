const salesService = require('../services/sales.service');

const addSales = async (req, res) => {
  try {
    const { body } = req;
    const { type, message } = await salesService.addSales(body);
    return res.status(type).json(message);
  } catch (error) {
    return error;
  }
};

const deleteSale = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const { type } = await salesService.deleteSale(id);
    return res.sendStatus(type);
  } catch (error) {
    return error;
  }
};

const listSales = async (_req, res) => {
  try {
    const { type, message } = await salesService.listSales();
    return res.status(type).json(message);
  } catch (error) {
    return error;
  }
};

const listSaleById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { type, message } = await salesService.listSaleById(id);
    return res.status(type).json(message);
  } catch (error) {
    return error;
  }
};

module.exports = {
  addSales,
  deleteSale,
  listSales,
  listSaleById,
};
