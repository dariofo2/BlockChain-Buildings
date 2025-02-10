import Web3 from "web3";
import fs from "fs";
import deployAndSendUploadContract from "./deployAndSendUploadContract.js";

const web3=new Web3("http://127.0.0.1:8545");
const block=web3.eth.getBlock;
const compiledContractRead=fs.readFileSync("blockchain/artifacts/contracts/useBCOtherContract.sol/BCTokenActions.json");
const compiledContract=JSON.parse(compiledContractRead);

//El ABI del contrato
//El contract Address Es distinto cada vez que lo subes. Hay que cambiarlo.
const abi=compiledContract.abi;
const contractAddress="0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

//Coger la cuenta que vamos a usar para llamar al contrato
const privatekey="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
const account = web3.eth.accounts.privateKeyToAccount(privatekey);
web3.eth.wallet.add(account);

//web3.eth.deffaultaccount sets the address account that 
// default is used on Everything (calls, send and balanceof,transfer...etc)
web3.eth.defaultAccount=account.address;
console.log(web3.eth.defaultAccount);

let contract=new web3.eth.Contract(abi,contractAddress,{from:account.address});

async function callContractBalanceBC () {
    let balance=await contract.methods.checkBalanceBC().call()
    
    console.log(balance);
}

async function sendContractTransferBC () {
    
    try {
        let amount = web3.utils.fromWei("100000000000000000000000","ether");
        let transferEncondedAbi=await contract.methods.transferBC(amount).encodeABI();
        console.log(transferEncondedAbi);
        let tx={
            
            from:account.address,
            to:contractAddress,
            gas:50000000000,
            maxPriorityFeePerGas:100000000,
            maxFeePerGas: 1000000000,
            data: transferEncondedAbi
        }
        
        var signed=await web3.eth.accounts.signTransaction(tx,privatekey);
        
        let rawtransaction=await signed.rawTransaction;
        let final=await web3.eth.sendSignedTransaction(rawtransaction);
        //console.log(final);
        
    } catch (error) {
        console.error(error);
    }
    
}

async function sendContractwithDrawBC () {
    let resp=await contract.methods.withdrawBC().send();
}

async function contractTest () {
    let resp=await contract.methods.test().call();
    console.log(resp);
}
async function checkEthereumBalance () {
    let balancee=await web3.eth.getBalance(account.address)
    balancee=web3.utils.fromWei(balancee.toString(),"ether");
    console.log(balancee)
}

sendContractTransferBC();
//sendContractwithDrawBC();
//contractTest();
callContractBalanceBC();





