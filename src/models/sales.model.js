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

module.exports = { addSales };
