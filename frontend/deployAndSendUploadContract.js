/**
 * Function to Deploy and Upload a Contract
 * @param {*} abi The abi of the Smart Contract Compiled
 * @param {*} byteCode The ByteCode of the Smart Contract Compiled
 * @param {*} account The Account From the user who creates the Contract
 * @param {*} web3 The Web3 Object Create with web3.js library
 * @returns {string} CONTRACT ADDRESS (WE WILL USE TO ACCESS TO THIS CONTRACT FROM OTHERS OR FROM WEB3.JS)
 */
export default async function deployAndSendUploadContract(abi, byteCode, account, argumentsContractConstructor, web3) {
    //Create an Ethereum Contract Object from its ABI
    const myContract = new web3.eth.Contract(abi);
  
    //ContractObject.deploy to generate the first for deploy.
    const contractDeployer = myContract.deploy({
      data: byteCode,
      arguments: argumentsContractConstructor,
    });
  
    //Estimate the gas we will need to.
    const gas = await contractDeployer.estimateGas();
    console.log("Estimated Gas to Deploy:" + gas);
  
    // ContractObject.deploy to Finally Send and Deploy the Contract to the BlockChain
    try {
      const tx = await contractDeployer.send({
        from: account.address,
        gas: gas,
        gasPrice: 10000000000,
      })
      //GET THE ADDRESS, YOU WILL NEED IT
      console.log("Contract Deployed at Address: " + tx.options.address);
      return tx.options.address;
    } catch (error) {
      console.error(error);
    }
  
  
  }