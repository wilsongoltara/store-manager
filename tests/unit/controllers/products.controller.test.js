const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

const app = require("../../../src/app");
const {
  HTTP_OK_SUCCESS,
  HTTP_NOT_FOUND,
  HTTP_CREATED,
} = require("../../../src/utils/customMessage");
const {
  productsMock,
  productByIdMock,
  productNotFoundMock,
  listafterAddProductMock,
} = require("../../mocks/products.mocks");

describe("Unit test the controller layer of the application:", () => {
  afterEach(sinon.restore);

  it("Test if it receives a list of products from the endpoint '/products'.", (done) => {
    chai
      .request(app)
      .get("/products")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(productsMock);
        done();
      });
  });

  it("Test if it receives a products from the endpoint '/products/:id.", (done) => {
    chai
      .request(app)
      .get("/products/1")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(productByIdMock);
        done();
      });
  });

  it("Test if it receives a error message from the endpoint '/products/:id' invalid.", (done) => {
    chai
      .request(app)
      .get("/products/9999")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_NOT_FOUND);
        expect(response.body).to.deep.equal(productNotFoundMock);
        done();
      });
  });

  // it("Test for add product from the endpoint '/products'.", (done) => {
  //   const newProduct = { name: "ProductX" };

  //   chai
  //     .request(app)
  //     .post("/products")
  //     .send(newProduct)
  //     .end((_err, response) => {
  //       expect(response.status).to.be.equal(HTTP_CREATED);
  //       expect(response.body).to.deep.equal(listafterAddProductMock);
  //       done();
  //     });
  // });
});
