const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/database/connection');
const productsModel = require('../../../src/models/products.model');
const { productsMock, productByIdMock, productNotFoundMock } = require('../../mocks/products.mocks');

describe('Unit test the model layer of the application:', () => {
  afterEach(sinon.restore);

  it("Test if it receives a list of products from the endpoint '/products'.", async () => {
    sinon.stub(connection, 'execute').resolves([productsMock]);

    const products = await productsModel.listProducts();

    expect(products).to.equal(productsMock);
  });

  it("Test if it receives a products from the endpoint '/products/:id.", async () => {
    sinon.stub(connection, "execute").resolves([productByIdMock]);

    const product = await productsModel.listProductById(1);

    expect(product).to.equal(productByIdMock);
  });

  it("Test if it receives a error message from the endpoint '/products/:id' invalid.",
    async () => {
      sinon.stub(connection, "execute").resolves([productNotFoundMock]);

      const productNotFound = await productsModel.listProductById(1000);

      expect(productNotFound).to.equal(productNotFoundMock);
  });
});
