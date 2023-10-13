const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", () => {
  let calculatorFactory, calculator;
  beforeEach(async () => {
    calculatorFactory = await ethers.getContractFactory("Calculator");
    calculator = await calculatorFactory.deploy();
  });

  it("Should return 0", async () => {
    assert.equal(await calculator.getLastResult(), 0);
  });
  it("Should give sum of 2 values", async () => {
    await calculator.addItem(4, 5);
    const result = 4 + 5;

    assert.equal(await calculator.getLastResult(), result);
  });

  it("Should give substract of 2 items", async () => {
    const substract = 10 - 5;
    await calculator.subtractItem(10, 5);
    assert.equal(await calculator.getLast_SubResult(), substract);
  });

  it("Should give result of Multiple 2 values", async () => {
    const multiplication = 10 * 5;
    await calculator.multiply(10, 5);
    assert.equal(await calculator.getLast_MulResult(), multiplication);
  });

  it("Should give the result of division of 2 values", async () => {
    const division = 10 / 5;
    await calculator.divide(10, 5);
    assert.equal(await calculator.getLast_DivResult(), division);
  });
});
