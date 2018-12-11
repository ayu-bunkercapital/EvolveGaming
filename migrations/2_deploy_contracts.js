const Evolve = artifacts.require("Evolve");

module.exports = function(deployer) {
    deployer.deploy(Evolve).then(() => {
        console.log("Evolve contract address is: ", Evolve.address)
    });
}