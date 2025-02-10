import Web3 from "web3";
import fs from "fs";
import deployAndSendUploadContract from "./deployAndSendUploadContract.js";

const web3=new Web3();
const compiledContractRead=fs.readFileSync("blockchain/artifacts/contracts/useBCOtherContract.sol/BCTokenActions.json");
const compiledContract=JSON.parse(compiledContractRead);

//El ABI del contrato
//El contract Address Es distinto cada vez que lo subes. Hay que cambiarlo.
const abi=compiledContract.abi;
const contractAddress="0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

//Coger la cuenta que vamos a usar para llamar al contrato
const privatekey="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const account = web3.eth.accounts.privateKeyToAccount(privatekey);
web3.eth.defaultAccount=account.address;
console.log(web3.eth.defaultAccount);

let contract=new web3.eth.Contract(abi,contractAddress);

async function callContract () {
    let balancee=await web3.eth.getBalance(account.address)
    balancee=web3.utils.fromWei(balancee.toString(),"ether");
    console.log(balancee)
    let balance=await contract.methods.checkBalanceBC().call({from:"0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"})
    
    console.log(balance.call.send);
}

callContract();





