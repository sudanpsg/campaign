import Web3 from "web3";

let web3;
//const web3 = new Web3(window.web3.currentProvider());

if (typeof window != "undefined" && typeof window.web3 != "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/af975fa453bd4680a7638462546861e5"
  );
  web3 = new Web3(provider);
}
export default web3;
