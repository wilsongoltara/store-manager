const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

const app = require("../../../src/app");
const {
  HTTP_CREATED,
  HTTP_OK_SUCCESS,
  HTTP_NOT_FOUND,
} = require("../../../src/utils/customMessage");
const {
  saleCreatedMock,
  newSaleMock,
  saleSelectedMock,
  listSalesMock,
} = require("../../mocks/sales.mocks");

describe("Test controller sales", () => {
  it("GET: a list product from the endpoint '/sales'.", (done) => {
    chai
      .request(app)
      .get("/sales")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(listSalesMock);
        done();
      });
  });

  it("GET: a product from the endpoint '/sales/:id'.", (done) => {
    chai
      .request(app)
      .get("/sales/1")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_OK_SUCCESS);
        expect(response.body).to.deep.equal(saleSelectedMock);
        done();
      });
  });

  it("GET: a error message from the endpoint '/products/:id' invalid.", (done) => {
    chai
      .request(app)
      .get("/sales/9999")
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_NOT_FOUND);
        expect(response.body).to.deep.equal({ message: "Sale not found" });
        done();
      });
  });

  it("POST: a product from the endpoint '/sales'.", (done) => {
    chai
      .request(app)
      .post("/sales")
      .send(newSaleMock)
      .end((_err, response) => {
        expect(response.status).to.be.equal(HTTP_CREATED);
        expect(response.body).to.deep.equal(saleCreatedMock);
        done();
      });
  });
});
