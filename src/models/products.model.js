const connection = require('./database/connection');

const addProduct = async (newProduct) => {
  try {
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await connection.execute(query, [newProduct]);
    return insertId;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const query = 'DELETE FROM StoreManager.products WHERE id = ?';
    await connection.execute(query, [productId]);
  } catch (error) {
    return error;
  }
};

const listProductById = async (productId) => {
  try {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [product] = await connection.execute(query, [Number(productId)]);
    return product;
  } catch (error) {
    return error;
  }
};

const listProducts = async () => {
  try {
    const query = 'SELECT * FROM StoreManager.products ORDER BY id';
    const [products] = await connection.execute(query);
    return products;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (nameProduct, productId) => {
  try {
    const query = `
      UPDATE
        StoreManager.products
      SET
        name = ?
      WHERE id = ?`;
    await connection.execute(query, [nameProduct, Number(productId)]);
  } catch (error) {
    return error;
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  listProductById,
  listProducts,
  updateProduct,
};
