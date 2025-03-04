import { Web3 } from "web3";
//import fs from "fs";
import jsonBuildings from "./Buildings.json";
/*
const web3 = new Web3("http://127.0.0.1:8545");

//Main Account
const privateKeyAccountMain = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const accountMain = web3.eth.accounts.privateKeyToAccount(privateKeyAccountMain);
//Secondary Account
const privateKey = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
*/
//Read Contract File JSON
const pathToBCCreate = "./blockchain/artifacts/contracts/buildings/buildings.sol/Buildings.json";
//let readCompiledContract = fs.readFileSync(pathToBCCreate, "utf-8");

//Read ABI from Contract File JSON
//const compiledContract = JSON.parse(readCompiledContract);
//const abi = compiledContract.abi;
const abi=jsonBuildings.abi;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
/*
//Create Contract Object with ABI + Contract Address
const contractBuildings = new web3.eth.Contract(abi, contractAddress, { from: account.address });
*/

export class AccountData {
    address;
    etherBalance;
    nameCoin;
    symbolCoin;
    coinBalance;
    coinContractBalance;
    buildingsTokens;
    buildingsOnSaleTokens;
}

export class Building {
    tokenId;
    name;
    level;
    timeFromSpend;
    owner;
    onSale;
    value;
}
export class buildingsContract {
    web3;
    account;
    contractBuildings;

    constructor(privateKey) {
        this.web3 = new Web3("http://127.0.0.1:8545");
        this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
        this.contractBuildings = new this.web3.eth.Contract(abi, contractAddress, { from: this.account.address });
    }
// ETHEREUM BALANCE
async getBalanceEther() {
    const wei = await this.web3.eth.getBalance(this.account.address);
    const eth = await this.web3.utils.fromWei(wei, "ether");
    console.log(eth);
    return eth;
}



// ERC20 BS COIN BALANCE
async getBalanceBS() {
    const balance = await this.contractBuildings.methods.balanceOf(this.account.address).call();
    console.log(balance);
    return balance;
}

async getBalanceBsOfContract() {
    const balance = await this.contractBuildings.methods.balanceOf(contractAddress).call();
    console.log(balance);
    return balance;
}

//ERC20 BS COIN DATA 
async nameCoin() {
    const name = await this.contractBuildings.methods.name().call();
    console.log(name);
    return name;
}

async symbolCoin() {
    const symbol = await this.contractBuildings.methods.symbol().call();
    console.log(symbol);
    return symbol;
}






// FUNCTIONS TO ACCESS CONTRACT
async createBuilding() {
    const resp = await this.contractBuildings.methods.createBuilding("Edificio Central").send({ from: this.account.address, value: 1000000000000000000 });
    //console.log(resp);
    return resp;
}

async getBuildings() {
    const resp = await this.contractBuildings.methods.getBuildingsTokenIdsFromAddress().call();
    //console.log(resp);
    return resp;
}

async getBuilding(tokenId) {
    const resp = await this.contractBuildings.methods.getBuilding(tokenId).call()
    //console.log(resp);
    return resp;
}

async upLevelBuilding(tokenId) {
    const resp = await this.contractBuildings.methods.upLevelBuilding(tokenId).send({ from: this.account.address, value: 1000000000000000000 });
    return resp;
}

async payloadBuilding(tokenId) {
    const resp = await this.contractBuildings.methods.payLoadBuilding(tokenId).send();
    return resp;
}


// BUY/SELL Buildings METHODS
async putBuildingOnSale(tokenId, value) {
    const resp = await this.contractBuildings.methods.putBuildingOnSale(tokenId, value).send();
    //console.log(resp);
    return resp;
}

async transferBuyBuilding(tokenId) {
    const resp = await this.contractBuildings.methods.transferBuyBuilding(tokenId).send();
    //console.log(resp);
    return resp;
}

async getBuildingsOnSale() {
    const resp = await this.contractBuildings.methods.getBuildingsOnSale().call();
    console.log(resp);
    return resp;
}

}
/*
// ETHEREUM BALANCE
async function getBalanceEther (accountAddress) {
    const wei=await web3.eth.getBalance(accountAddress);
    const eth=await web3.utils.fromWei(wei,"ether");
    console.log(eth);
    return eth;
}



// ERC20 BS COIN BALANCE
async function getBalanceBS (accountAddress) {
    const balance= await contractBuildings.methods.balanceOf(accountAddress).call();
    console.log(balance);
    return balance;
}

async function getBalanceBsOfContract() {
    const balance= await contractBuildings.methods.balanceOf(contractAddress).call();
    console.log(balance);
    return balance;
}

//ERC20 BS COIN DATA 
async function nameCoin() {
    const name=await contractBuildings.methods.name().call();
    console.log(name);
    return name;
}

async function symbolCoin() {
    const symbol=await contractBuildings.methods.symbol().call();
    console.log(symbol);
    return symbol;
}






// FUNCTIONS TO ACCESS CONTRACT
async function createBuilding (accountAddress) {
    const resp = await contractBuildings.methods.createBuilding("Edificio Central").send({from:accountAddress,value:1000000000000000000});
    //console.log(resp);
    return resp;
}

async function getBuildings () {
    const resp=await contractBuildings.methods.getBuildingsTokenIdsFromAddress().call();
    console.log(resp);
    return resp;
}

async function getBuilding (tokenId) {
    const resp=await contractBuildings.methods.getBuilding(tokenId).call()
    console.log(resp);
    return resp;
}

async function upLevelBuilding (tokenId,accountAddress) {
    const resp= await contractBuildings.methods.upLevelBuilding(tokenId).send({from:accountAddress,value:1000000000000000000});
    return resp;
}

async function payloadBuilding (tokenId) {
    const resp = await contractBuildings.methods.payLoadBuilding(tokenId).send();
    return resp;
}


// BUY/SELL Buildings METHODS
async function putBuildingOnSale (tokenId,value) {
    const resp= await contractBuildings.methods.putBuildingOnSale(tokenId,value).send();
    //console.log(resp);
    return resp;
}

async function transferBuyBuilding (tokenId) {
    const resp= await contractBuildings.methods.transferBuyBuilding(tokenId).send();
    //console.log(resp);
    return resp;
}

async function getBuildingsOnSale () {
    const resp= await contractBuildings.methods.getBuildingsOnSale().call();
    console.log(resp);
    return resp;
}

//Buildings
createBuilding(account.address);
//getBuildings();
getBuilding(1);
upLevelBuilding(1,account.address);
payloadBuilding(1);

//Sell/Buy Buildings
putBuildingOnSale(1,50);
//transferBuyBuilding(1,accountMain.address);
getBuildingsOnSale();

//Get Balances
//Ether
getBalanceEther(account.address);
//ERC20 Coin
getBalanceBS(account.address);
getBalanceBsOfContract();

//ERC20 Coin Name and Symbol
nameCoin();
symbolCoin();

*/