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
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const listSalesMock = [
  {
    saleId: 1,
    date: "2022-09-19T16:19:24.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-09-19T16:19:24.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-09-19T16:19:24.000Z",
    productId: 3,
    quantity: 15,
  },
];

const saleSelectedMock = [
  {
    date: "2022-09-19T16:19:24.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2022-09-19T16:19:24.000Z",
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  newSaleMock,
  saleCreatedMock,
  saleSelectedMock,
  listSalesMock,
}
