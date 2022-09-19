const connection = require('./database/connection');

const getIdBySales = async () => {
  try {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (?)';
    const date = new Date();
    const [{ insertId }] = await connection.execute(query, [date]);

    return insertId;
  } catch (error) {
    return error;
  }
};

const addSales = async (newSales) => {
  try {
    const query = `
      INSERT INTO
        StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES
        (?, ?, ?)`;
    const saleId = await getIdBySales();

    await Promise.all(
      newSales.map((newSale) =>
        connection.execute(query, [saleId, newSale.productId, newSale.quantity])),
    );

    return saleId;
  } catch (error) {
    return error;
  }
};

const listSales = async () => {
  try {
    const query = `
      SELECT
        s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
      FROM
        StoreManager.sales AS s
      JOIN
        StoreManager.sales_products  AS sp
      ON
        s.id = sp.sale_id;`;
    const [sales] = await connection.execute(query);

    return sales;
  } catch (error) {
    return error;
  }
};

const listSaleById = async (salesId) => {
  try {
    const query = `
    SELECT
      s.date, sp.product_id AS productId, sp.quantity
    FROM
      StoreManager.sales AS s
    JOIN
      StoreManager.sales_products AS sp
    ON
      s.id = sp.sale_id
    WHERE
      s.id = ?`;
    const [sale] = await connection.execute(query, [Number(salesId)]);

    return sale;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addSales,
  listSales,
  listSaleById,
};
