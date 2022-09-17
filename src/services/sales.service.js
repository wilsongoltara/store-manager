const { HTTP_CREATED, HTTP_OK_SUCCESS, HTTP_NOT_FOUND } = require('../utils/customMessage');
const salesModel = require('../models/sales.model');

const addSales = async (newSales) => {
  const id = await salesModel.addSales(newSales);
  const salesAdded = {
    id,
    itemsSold: newSales,
  };

  return { type: HTTP_CREATED, message: salesAdded };
};

const listSales = async () => {
  const sales = await salesModel.listSales();
  return { type: HTTP_OK_SUCCESS, message: sales };
};

const listSaleById = async (saleId) => {
  const sale = await salesModel.listSaleById(saleId);
  return {
    type: sale.length > 0 ? HTTP_OK_SUCCESS : HTTP_NOT_FOUND,
    message: sale.length > 0 ? sale : 'Sale not found',
  };
};

module.exports = {
  addSales,
  listSales,
  listSaleById,
};
