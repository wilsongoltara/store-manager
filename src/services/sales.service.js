const { HTTP_CREATED } = require('../utils/customMessage');
const salesModel = require('../models/sales.model');

const addSales = async (newSales) => {
  const id = await salesModel.addSales(newSales);
  const salesAdded = {
    id,
    itemsSold: newSales,
  };
  
  return { type: HTTP_CREATED, message: salesAdded };
};

module.exports = {
  addSales,
};
