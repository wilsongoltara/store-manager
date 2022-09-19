const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/models/database/connection");
const { newSaleMock } = require("../../mocks/sales.mocks");
const salesModel = require('../../../src/models/sales.model');

describe("Test model sale", () => {
  afterEach(sinon.restore);

  it("Test if it post a sale from the endpoint '/sales", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);

    const id = await salesModel.addSales(newSaleMock);

    expect(id).to.equal(4);
  });
});
