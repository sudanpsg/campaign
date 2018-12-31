const fs = require("fs-extra");
const path = require("path");
const solc = require("solc");

const buildpath = path.resolve(__dirname, "build");
fs.removeSync(buildpath);
const mypath = path.resolve(__dirname, "contracts", "campaign.sol");
const source = fs.readFileSync(mypath, "utf8");

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildpath);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildpath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}