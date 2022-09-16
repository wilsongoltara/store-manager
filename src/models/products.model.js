const connection = require('./database/connection');

const addProduct = async (newProduct) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [productAdded] = await connection.execute(query, [newProduct]);
  const { insertId } = productAdded;
  return insertId;
};

const listProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

const listProductById = async (productId) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [Number(productId)]);
  return product;
};

module.exports = {
  listProducts,
  listProductById,
  addProduct,
};
