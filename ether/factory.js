import web3 from "./web3";
import factcompile from "./build/Factory.json";

const deployed_addres = "0x722FeCE4Af65Cf3EDf52bAaB514D77ff77d905AA";

const myfact = new web3.eth.Contract(
  JSON.parse(factcompile.interface),
  deployed_addres
);

export { myfact };
