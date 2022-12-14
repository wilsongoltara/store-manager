const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

const app = require("../../../src/app");
const productsModel = require("../../../src/models/products.model");
const {
  HTTP_OK_SUCCESS,
  HTTP_NOT_FOUND,
  HTTP_CREATED,
} = require("../../../src/utils/customMessage");
const {
  productsMock,
  productByIdMock,
  productNotFoundMock,
  productAddedMock,
} = require("../../mocks/products.mocks");

describe("Test controller products", () => {
  afterEach(sinon.restore);
  
  it("GET: a list of products from the endpoint '/products'.", (done) => {
    chai
      .request(app)
      .get("/products")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(productsMock);
        done();
      });
  });

  it("GET: a products from the endpoint '/products/:id.", (done) => {
    chai
      .request(app)
      .get("/products/1")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(productByIdMock);
        done();
      });
  });

  it("GET: a error message from the endpoint '/products/:id' invalid.", (done) => {
    chai
      .request(app)
      .get("/products/9999")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_NOT_FOUND);
        expect(response.body).to.deep.equal(productNotFoundMock);
        done();
      });
  });

  it("POST: a product from the endpoint '/products'.", (done) => {
    sinon.stub(productsModel, 'addProduct').resolves(4);

    const newProduct = { name: "ProductX" };

    chai
      .request(app)
      .post("/products")
      .send(newProduct)
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_CREATED);
        expect(response.body).to.deep.equal(productAddedMock);
        done();
      });
  });
});
