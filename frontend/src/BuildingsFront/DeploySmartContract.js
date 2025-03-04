import { Web3 } from "web3";
import fs from "fs";
import path from "path";
import deployAndSendUploadContract from "./deployAndSendUploadContract.js";
import BuildingsJson from "./Buildings.json" with {type:"json"};

//Connect To BlockChain Provider with Web3.js
const web3 = new Web3("http://blockchain:8545");

//Read the Solidity Contract Compiled to Get ABI and BYTECODE from the JSON generated on compiled
//**Take care with relative paths, if u are testing in VSCode, the Root Path is Project path with FS.
const pathToBCCreate = "./blockchain/artifacts/contracts/buildings/buildings.sol/Buildings.json";

//let readCompiledContract = fs.readFileSync(pathToBCCreate, "utf-8");

//const compiledContract = JSON.parse(readCompiledContract);
//const abi = compiledContract.abi;
//const byteCode = compiledContract.bytecode;

const abi=BuildingsJson.abi;
const byteCode=BuildingsJson.bytecode;

// Get Account from his private Key
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
console.log(account);



async function deployTokenCoinContracts() {
  //This Contract is a creation of a ERC20 Token Coin
  let tokenERC20BS = await deployAndSendUploadContract(abi, byteCode, account, [], web3);

  console.log("THE TOKEN OF THE CRYPTO CREATED (AND CONTRACT ADDRESS, WHICH IS THE SAME WICH IDENTIFIES IS: "+tokenERC20BS);

// Deploy the Other Contract which interacts with the ERC20 Token Coin Created before
// We use Argument (tokenERC20BC) which is the address of the ERC20 creation Contract.
/*
  const compiledContractRead2 = fs.readFileSync("blockchain/artifacts/contracts/useBCOtherContract.sol/BCTokenActions.json");
  const compiledContract2 = JSON.parse(compiledContractRead2);

  const abi2 = compiledContract2.abi;
  const byteCode2 = compiledContract2.bytecode;

  await deployAndSendUploadContract(abi2, byteCode2, account,["0x5fbdb2315678afecb367f032d93f642f64180aa3"], web3);
*/
  }

deployTokenCoinContracts();