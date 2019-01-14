import web3 from "./web3";
import factcompile from "./build/Factory.json";

//const deployed_addres = "0x722FeCE4Af65Cf3EDf52bAaB514D77ff77d905AA"; old deployed contract

const deployed_addres = "0x1B7cCb683Db9610B8e22F2c8780fc24aaF1D0698";

const myfact = new web3.eth.Contract(
  JSON.parse(factcompile.interface),
  deployed_addres
);

export { myfact };
