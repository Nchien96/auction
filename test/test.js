const { expect } = require("chai");
const { ethers } = require("hardhat");

beforeEach(async () => {
  await ethers.provider.send("hardhat_reset", []);
  [owner, acc1, acc2, acc3, acc4] = await ethers.getSigners();

  const Auction = await ethers.getContractFactory("auction", owner);
  auction = await Auction.deploy();
});

it("should set bidders", async () => {
  await auction.connect(acc1).register();
  let result = await auction.connect(acc1).getPersonDetails(0);
  console.log("result", result[2]);
  expect(result[2]).to.equal(acc1.address);
});
