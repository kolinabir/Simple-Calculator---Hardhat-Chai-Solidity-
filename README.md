

```markdown
# Solidity Calculator

This repository contains a simple calculator smart contract written in Solidity, along with unit tests and deployment scripts.

## Smart Contract Overview

The smart contract provides basic arithmetic operations (addition, subtraction, multiplication, and division) and stores the results of each operation.
Calculator deployed to: 0x234b5115935ef97f2fc7926d880C1EcAD7751651
https://sepolia.etherscan.io/address/0x234b5115935ef97f2fc7926d880C1EcAD7751651


## Usage

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- [Hardhat](https://hardhat.org/) for Ethereum development.

### Installation

```bash
# Clone the repository
https://github.com/kolinabir/Simple-Calculator---Hardhat-Chai-Solidity-

# Navigate to the project directory
cd solidity-calculator

# Install dependencies
npm install
# or
yarn
```

### Smart Contract Deployment

To deploy the smart contract to the Ethereum blockchain, you can use the following command:

```bash
npx hardhat run scripts/deploy.js --network <network>
# or
yarn hardhat run scripts/deploy.js --network <network>
```

![Screenshot 1](https://i.ibb.co/vB89ZsL/image.png)



### Smart Contract Verification

If you're deploying to a supported network and have an Etherscan API key set up, you can also verify the contract using the following command:

```bash
npx hardhat run scripts/deploy.js --network sepolia
# or
yarn hardhat run scripts/deploy.js --network sepolia
// try one more time if it gives error
```

### Running Tests

```bash
npx hardhat test .\test\01-test-Calculator.js
# or
 yarn hardhat test .\test\01-test-Calculator.js
```

This command will run the unit tests for the smart contract.
![Screenshot 2](https://i.ibb.co/9sYM1mv/image.png)

## Smart Contract Details

The smart contract is written in Solidity and provides the following functions:

- `addItem(uint256 a, uint256 b)`: Adds two numbers and stores the result.
- `subtractItem(uint256 a, uint256 b)`: Subtracts the second number from the first and stores the result.
- `multiply(uint256 a, uint256 b)`: Multiplies two numbers and stores the result.
- `divide(uint256 a, uint256 b)`: Divides the first number by the second and stores the result.
- `getLastResult()`: Returns the result of the last addition operation.
- `getLast_SubResult()`: Returns the result of the last subtraction operation.
- `getLast_MulResult()`: Returns the result of the last multiplication operation.
- `getLast_DivResult()`: Returns the result of the last division operation.

## Unit Tests

The unit tests can be found in the `test` directory. They verify the functionality of the smart contract using [Hardhat](https://hardhat.org/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute, please fork the repository, create a new branch, and make your changes. Submit a pull request when you're ready!

## Acknowledgments

This project uses the [OpenZeppelin](https://openzeppelin.com/) library for SafeMath and Ownable functionality.

