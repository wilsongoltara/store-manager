const productsMock = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const productByIdMock = { id: 1, name: "Martelo de Thor" };

const productNotFoundMock = { message: 'Product not found' };

const newProductMock = { name: "ProductX" };

const productAddedMock = { id: 4, name: "ProductX" };

const newSaleMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleCreatedMock = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

module.exports = {
  productsMock,
  productByIdMock,
  productNotFoundMock,
  newProductMock,
  productAddedMock,
  newSaleMock,
  saleCreatedMock,
};
