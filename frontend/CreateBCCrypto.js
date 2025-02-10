import {Web3} from "web3";
import {readFileSync} from "fs";

const web3=new Web3("http://127.0.0.1:8545");
const pathToBCCreate="../blockchain/artifacts/contracts/BC.sol/ERC20BlockchainSupply.json";
//let file=fs.open(pathToBCCreate,);
let read=readFileSync(pathToBCCreate);
console.log(read);
const abi=[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const byteCode= "0x608060405234801561001057600080fd5b506040518060400160405280600a81526020017f426c6f636b636861696e000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4243000000000000000000000000000000000000000000000000000000000000815250816003908161008c91906105b3565b50806004908161009c91906105b3565b5050506100b1336113886100b660201b60201c565b6107a5565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036101285760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161011f91906106c6565b60405180910390fd5b61013a6000838361013e60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036101905780600260008282546101849190610710565b92505081905550610263565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561021c578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161021393929190610753565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102ac57806002600082825403925050819055506102f9565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610356919061078a565b60405180910390a3505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103e457607f821691505b6020821081036103f7576103f661039d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261045f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610422565b6104698683610422565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006104b06104ab6104a684610481565b61048b565b610481565b9050919050565b6000819050919050565b6104ca83610495565b6104de6104d6826104b7565b84845461042f565b825550505050565b600090565b6104f36104e6565b6104fe8184846104c1565b505050565b5b81811015610522576105176000826104eb565b600181019050610504565b5050565b601f82111561056757610538816103fd565b61054184610412565b81016020851015610550578190505b61056461055c85610412565b830182610503565b50505b505050565b600082821c905092915050565b600061058a6000198460080261056c565b1980831691505092915050565b60006105a38383610579565b9150826002028217905092915050565b6105bc82610363565b67ffffffffffffffff8111156105d5576105d461036e565b5b6105df82546103cc565b6105ea828285610526565b600060209050601f83116001811461061d576000841561060b578287015190505b6106158582610597565b86555061067d565b601f19841661062b866103fd565b60005b828110156106535784890151825560018201915060208501945060208101905061062e565b86831015610670578489015161066c601f891682610579565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b082610685565b9050919050565b6106c0816106a5565b82525050565b60006020820190506106db60008301846106b7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061071b82610481565b915061072683610481565b925082820190508082111561073e5761073d6106e1565b5b92915050565b61074d81610481565b82525050565b600060608201905061076860008301866106b7565b6107756020830185610744565b6107826040830184610744565b949350505050565b600060208201905061079f6000830184610744565b92915050565b610e56806107b46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610aaa565b60405180910390f35b6100d060048036038101906100cb9190610b65565b610292565b6040516100dd9190610bc0565b60405180910390f35b6100ee6102b5565b6040516100fb9190610bea565b60405180910390f35b61011e60048036038101906101199190610c05565b6102bf565b60405161012b9190610bc0565b60405180910390f35b61013c6102ee565b6040516101499190610c74565b60405180910390f35b61016c60048036038101906101679190610c8f565b6102f7565b6040516101799190610bea565b60405180910390f35b61018a61033f565b6040516101979190610aaa565b60405180910390f35b6101ba60048036038101906101b59190610b65565b6103d1565b6040516101c79190610bc0565b60405180910390f35b6101ea60048036038101906101e59190610cbc565b6103f4565b6040516101f79190610bea565b60405180910390f35b60606003805461020f90610d2b565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610d2b565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b60008061029d61047b565b90506102aa818585610483565b600191505092915050565b6000600254905090565b6000806102ca61047b565b90506102d7858285610495565b6102e285858561052a565b60019150509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461034e90610d2b565b80601f016020809104026020016040519081016040528092919081815260200182805461037a90610d2b565b80156103c75780601f1061039c576101008083540402835291602001916103c7565b820191906000526020600020905b8154815290600101906020018083116103aa57829003601f168201915b5050505050905090565b6000806103dc61047b565b90506103e981858561052a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b610490838383600161061e565b505050565b60006104a184846103f4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105245781811015610514578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161050b93929190610d6b565b60405180910390fd5b6105238484848403600061061e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361059c5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105939190610da2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361060e5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106059190610da2565b60405180910390fd5b6106198383836107f5565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036106905760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106879190610da2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107025760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016106f99190610da2565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156107ef578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107e69190610bea565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361084757806002600082825461083b9190610dec565b9250508190555061091a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156108d3578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108ca93929190610d6b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361096357806002600082825403925050819055506109b0565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a0d9190610bea565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a54578082015181840152602081019050610a39565b60008484015250505050565b6000601f19601f8301169050919050565b6000610a7c82610a1a565b610a868185610a25565b9350610a96818560208601610a36565b610a9f81610a60565b840191505092915050565b60006020820190508181036000830152610ac48184610a71565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610afc82610ad1565b9050919050565b610b0c81610af1565b8114610b1757600080fd5b50565b600081359050610b2981610b03565b92915050565b6000819050919050565b610b4281610b2f565b8114610b4d57600080fd5b50565b600081359050610b5f81610b39565b92915050565b60008060408385031215610b7c57610b7b610acc565b5b6000610b8a85828601610b1a565b9250506020610b9b85828601610b50565b9150509250929050565b60008115159050919050565b610bba81610ba5565b82525050565b6000602082019050610bd56000830184610bb1565b92915050565b610be481610b2f565b82525050565b6000602082019050610bff6000830184610bdb565b92915050565b600080600060608486031215610c1e57610c1d610acc565b5b6000610c2c86828701610b1a565b9350506020610c3d86828701610b1a565b9250506040610c4e86828701610b50565b9150509250925092565b600060ff82169050919050565b610c6e81610c58565b82525050565b6000602082019050610c896000830184610c65565b92915050565b600060208284031215610ca557610ca4610acc565b5b6000610cb384828501610b1a565b91505092915050565b60008060408385031215610cd357610cd2610acc565b5b6000610ce185828601610b1a565b9250506020610cf285828601610b1a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d4357607f821691505b602082108103610d5657610d55610cfc565b5b50919050565b610d6581610af1565b82525050565b6000606082019050610d806000830186610d5c565b610d8d6020830185610bdb565b610d9a6040830184610bdb565b949350505050565b6000602082019050610db76000830184610d5c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df782610b2f565b9150610e0283610b2f565b9250828201905080821115610e1a57610e19610dbd565b5b9291505056fea264697066735822122019c043a633a856e396e210c76d4a46c0d4bfe13518c6f9777ad30f6bcd37556264736f6c634300081c0033";

const privateKey="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const account=web3.eth.accounts.privateKeyToAccount(privateKey);
console.log(account);

async function deployAndSendUploadContract() {
    const myContract=new web3.eth.Contract(abi);

    const contractDeployer=myContract.deploy({
        data: byteCode,
        arguments: [],
    });
    
    
    const gas=await contractDeployer.estimateGas();
    console.log("Estimated Gas to Deploy:" + gas);
    
    
    try {
        const tx= await contractDeployer.send({
            from: account.address,
            gas:gas,
            gasPrice:10000000000,
        })
        console.log("Contract Deployed at Address: " + tx.options.address);
    } catch (error) {
        console.error(error);
    }
        
    
}

deployAndSendUploadContract();

