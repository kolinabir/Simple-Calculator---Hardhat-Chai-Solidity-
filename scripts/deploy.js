const { ethers, run, network } = require("hardhat");

async function main() {
  const CalculatorFactory = await ethers.getContractFactory("Calculator");
  console.log("Deploying contract...");
  const simpleCalculator = await CalculatorFactory.deploy();

  // to get address
  console.log("Calculator deployed to:", simpleCalculator.target);

  if (network.name === "sepolia" && process.env.ETHERSCAN_API) {
    console.log("Verifying contract...");
    const deploymentReceipt = await simpleCalculator
      .deploymentTransaction()
      .wait(2);
    await verify(simpleCalculator.target, []);
  }
}
//deployed address
//  0xF6461619e71488DFD85f836e7A00eBc7fd6F16ba

async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
    console.log("Done!");
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
