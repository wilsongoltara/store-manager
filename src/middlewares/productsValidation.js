const { HTTP_BAD_REQUEST, HTTP_UNPROCESSABLE_ENTITY } = require('../utils/customMessage');

const validationNameProduct = (req, res) => {
  const { body: { name } } = req;
  if (!name) res.status(HTTP_BAD_REQUEST).json({ message: '"name" is required' });
  if (name.length < 5) {
    res
      .status(HTTP_UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
};

module.exports = { validationNameProduct };
