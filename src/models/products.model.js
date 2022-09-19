const connection = require('./database/connection');

const addProduct = async (newProduct) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [newProduct]);
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

const updateProduct = async (nameProduct, productId) => {
  const query = `
    UPDATE
      StoreManager.products
    SET
      name = ?
    WHERE id = ?`;
  await connection.execute(query, [nameProduct, Number(productId)]);
};

module.exports = {
  addProduct,
  listProductById,
  listProducts,
  updateProduct,
};
