const my_contract = artifacts.require("MyContract");

module.exports = function (deployer) {
  deployer.deploy(my_contract);
};
