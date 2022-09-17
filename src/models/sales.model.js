const connection = require('./database/connection');

const getIdBySales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (?)';
  const date = new Date();
  const [resultQuery] = await connection.execute(query, [date]);
  const { insertId } = resultQuery;

  return insertId;
};

const addSales = async (newSales) => {
  const query = `
    INSERT INTO
      StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES
      (?, ?, ?)`;
  const saleId = await getIdBySales();

  await Promise.all(
    newSales.map((newSale) => connection
      .execute(query, [saleId, newSale.productId, newSale.quantity])),
  );

  return saleId;
};

const listSales = async () => {
  const query = `
    SELECT
      s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM
      StoreManager.sales AS s
    JOIN
      StoreManager.sales_products  AS sp
    ON
      s.id = sp.sale_id;`;
  const [products] = await connection.execute(query);

  return products;
};

const listSaleById = async (salesId) => {
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
  const [sales] = await connection.execute(query, [Number(salesId)]);

  return sales;
};

module.exports = {
  addSales,
  listSales,
  listSaleById,
};
