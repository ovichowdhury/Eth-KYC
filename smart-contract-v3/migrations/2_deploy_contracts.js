var Kyc = artifacts.require("./KYC.sol");

module.exports = function(deployer) {
  deployer.deploy(Kyc, { gas : 10000000});
};