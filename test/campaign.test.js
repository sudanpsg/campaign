const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const assert = require("assert");

const compilefact = require("../ether/build/Factory.json");
const compilecamp = require("../ether/build/campaign.json");
let campfactory;
let account;
let campaignaddress;
let camp;

beforeEach(async () => {
  account = await web3.eth.getAccounts();
  console.log("wtf is ", account);
  campfactory = await new web3.eth.Contract(JSON.parse(compilefact.interface))
    .deploy({ data: compilefact.bytecode })
    .send({ from: account[0], gas: "1000000" });

  await campfactory.methods
    .createcamp("100")
    .send({ from: account[0], gas: 1000000 });

  campaignaddress = await campfactory.methods.getcamp().call();
  //console.log("camp array value is ", campaignaddress[0]);
  camp = await new web3.eth.Contract(
    JSON.parse(compilecamp.interface),
    campaignaddress[0]
  );
  console.log("campaign address is ", camp.options.address);
  console.log("factaoty is ", campfactory.options.address);
});

describe("my test", () => {
  // const account = await web3.eth.getAccounts();
  // console.log("what is happening ", account);
  // console.log("accounts are", account);
  it("first test", async () => {
    assert.ok(campfactory.options.address);
    assert.ok(camp.options.address);
    // assert.ok(camp.options.address);
  });
});
