const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const productsService = require("../../../src/services/products.service");
const {
  productsMock,
  productByIdMock,
  productNotFoundMock,
} = require("../../mocks/products.mocks");

describe("Unit test the servic layer of the application:", () => {
  afterEach(sinon.restore);

  it("Test if it receives a list of products from the endpoint '/products'.", async () => {
    sinon.stub(productsModel, "listProducts").resolves(productsMock);

    const products = await productsService.listProducts();

    expect(products).to.equal(productsMock);
  });

  it("Test if it receives a products from the endpoint '/products/:id.", async () => {
    sinon.stub(productsModel, "listProductById").resolves([productByIdMock]);

    const { result } = await productsService.listProductById(1);

    expect(result).to.deep.equal([productByIdMock]);
  });

  it("Test if it receives a error message from the endpoint '/products/:id' invalid.", async () => {
    sinon
      .stub(productsModel, "listProductById")
      .resolves([productNotFoundMock]);

    const { result } = await productsService.listProductById(undefined);

    expect(result).to.deep.equal([productNotFoundMock]);
  });
});
