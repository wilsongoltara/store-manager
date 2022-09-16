const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

const app = require("../../../src/app");
const { HTTP_CREATED } = require("../../../src/utils/customMessage");
const { saleCreatedMock, newSaleMock } = require("../../mocks/products.mocks");

describe("Test controller products", () => {
  afterEach(sinon.restore);

  it("POST: a product from the endpoint '/products'.", (done) => {
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
