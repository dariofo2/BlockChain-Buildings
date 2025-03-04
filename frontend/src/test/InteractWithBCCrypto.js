import Web3 from "web3";
import fs from "fs";
import deployAndSendUploadContract from "./deployAndSendUploadContract.js";

const web3 = new Web3("http://127.0.0.1:8545");
const block = web3.eth.getBlock();
const compiledContractRead = fs.readFileSync("blockchain/artifacts/contracts/useBCOtherContract.sol/BCTokenActions.json");
const compiledContract = JSON.parse(compiledContractRead);

//El ABI del contrato
//El contract Address Es distinto cada vez que lo subes. Hay que cambiarlo.
const abi = compiledContract.abi;
const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

//EL ABI del contrato ERC20
let readCompiledContracterc = fs.readFileSync("./blockchain/artifacts/contracts/BC.sol/ERC20BlockchainSupply.json", "utf-8");
const ERC20JsonCompiled = JSON.parse(readCompiledContracterc);
const abiERC20 = ERC20JsonCompiled.abi;
const contractERC20Address="0x5fbdb2315678afecb367f032d93f642f64180aa3";


//Coger la cuenta que vamos a usar para llamar al contrato
const privatekey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const account = web3.eth.accounts.privateKeyToAccount(privatekey);
web3.eth.wallet.add(account);
//web3.eth.deffaultaccount sets the address account that 
// default is used on Everything (calls, send and balanceof,transfer...etc)
web3.eth.defaultAccount = account.address;
console.log(web3.eth.defaultAccount);

//Inicializar CONTRATOS!!
let contract = new web3.eth.Contract(abi, contractAddress, { from: account.address });
const contractERC20 = new web3.eth.Contract(abiERC20, contractERC20Address, {from:account.address});




async function callContractBalanceBC() {
    let balance = await contract.methods.checkBalanceBC().call()

    console.log(balance);
}
async function sendContractERC20transferBC() {
    let transfer = await contractERC20.methods.transfer("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 100).send({ from: account.address });
}
async function sendContractTransferBC(value) {
    //First we have to approve the Contract FROM INSIDE ERC20 Main Contract. to spend the ERC20 Token from the account.
    let transferAprovalSpender=await contractERC20.methods.approve(contractAddress,value).send({from:account.address});
    //Finally, when is aproved we can use the Other Contract outside to Transfer the Token
    let transferEncondedAbi = await contract.methods.transferBC(value).send({ from: account.address, gas: 500000 });
    console.log(transferEncondedAbi)



}

async function sendContractwithDrawBC() {
    let resp = await contract.methods.withdrawBC().send();
}

async function contractTest() {
    let resp = await contract.methods.test().call();
    console.log(resp);
}
async function checkEthereumBalance() {
    let balancee = await web3.eth.getBalance(account.address)
    balancee = web3.utils.fromWei(balancee.toString(), "ether");
    console.log(balancee)
}

//sendContractERC20transferBC();
//sendContractTransferBC(1000);
//sendContractwithDrawBC();
//contractTest();
callContractBalanceBC();
checkEthereumBalance();





