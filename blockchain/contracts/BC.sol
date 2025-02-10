// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

//Normalmente se importan los token ERC20 usando:
//  npm install @openzeppelin/contracts

//import "@openzeppelin/contracts/utils/Context.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./ERC20/ERC20.sol";

contract ERC20BlockchainSupply is ERC20 {
    constructor() ERC20("Blockchain", "BC") {
        _mint(msg.sender, 5000);
    }
}