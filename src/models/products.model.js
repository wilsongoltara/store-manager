const connection = require('./database/connection');

const listProducts = async () => {
  const sql = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(sql);
  return products;
};

const listProductById = async (productId) => {
  const sql = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(sql, [Number(productId)]);
  return product;
};

module.exports = {
  listProducts,
  listProductById,
};
