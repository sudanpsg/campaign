const hdwallet = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const factory = require("../ether/build/Factory.json");
const provider = new hdwallet(
  "already snow dance proof nice manual reopen make focus lounge glove omit",
  "https://rinkeby.infura.io/v3/af975fa453bd4680a7638462546861e5"
);
const web3 = new Web3(provider);

let accounts;
console.log("inside deploy");
const deploy = async () => {
  accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  const d1 = await new web3.eth.Contract(JSON.parse(factory.interface))
    .deploy({ data: "0x" + factory.bytecode })
    .send({ from: accounts[0], gas: 5000000 });

  console.log("deployed address is ", d1.options.address);
};
deploy();
//deployed address  0x842461146ABcdB32292A08DA066bECB8cC249d41
// latest deployed address is 0x722FeCE4Af65Cf3EDf52bAaB514D77ff77d905AA
