require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  gasReporter: {
    currency: 'EUR',
    gasPrice: 21,
    enabled: (process.env.REPORT_GAS) ? true : false
  }
};
