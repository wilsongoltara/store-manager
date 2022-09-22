const { HTTP_CREATED, HTTP_OK_SUCCESS, HTTP_DELETED } = require('../utils/customMessage');
const salesModel = require('../models/sales.model');

const addSales = async (newSales) => {
  try {
    const id = await salesModel.addSales(newSales);
    const salesAdded = {
      id,
      itemsSold: newSales,
    };

    return { type: HTTP_CREATED, message: salesAdded };
  } catch (error) {
    return error;
  }
};

const deleteSale = async (saleId) => {
  try {
    await salesModel.deleteSale(saleId);
    return { type: HTTP_DELETED };
  } catch (error) {
    return error;
  }
};

const listSales = async () => {
  try {
    const sales = await salesModel.listSales();
    return { type: HTTP_OK_SUCCESS, message: sales };
  } catch (error) {
    return error;
  }
};

const listSaleById = async (saleId) => {
  try {
    const sale = await salesModel.listSaleById(saleId);
    return { type: HTTP_OK_SUCCESS, message: sale };
  } catch (error) {
    return error;
  }
};

module.exports = {
  addSales,
  listSales,
  listSaleById,
  deleteSale,
};
