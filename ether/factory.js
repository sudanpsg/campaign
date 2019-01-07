import web3 from "./web3";
import factcompile from "./build/Factory.json";

const deployed_addres = "0x842461146ABcdB32292A08DA066bECB8cC249d41";

const myfact = new web3.eth.Contract(
  JSON.parse(factcompile.interface),
  deployed_addres
);

export { myfact };
