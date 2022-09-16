const { HTTP_CREATED } = require('../utils/customMessage');

const addSales = async (req, res) => {
  const { body } = req;
  // addSales from services
  res.status(HTTP_CREATED).json({ message: 'created' });
};

module.exports = {
  addSales,
};
