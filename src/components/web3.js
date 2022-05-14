import Web3 from "web3";
const web3 = new Web3(window.ethereum);
console.log(web3);

let httpProvider = undefined;
const provider = new Web3(Window.ethereum);

export const DisconnectWallet =async()=>{
  if (window.WC) {
    await provider.disconnect();
  }
}

const getWeb3 = () => {
  return new Web3(httpProvider);
};
export { getWeb3 };