// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

import "./ERC20/IERC20.sol";

contract BCTokenActions {
    IERC20 private _token;
    address private owner;
    address private contractAddress;
    //Constructor IERC20 token is the Contract Address of the ERC20 Created Crypto
    constructor (address token) {
        _token = IERC20(token);
        owner = msg.sender;
        contractAddress = address(this);
    }

    function transferBC(uint value) external returns (bool isTrue) {
        address from = msg.sender;
        return _token.transferFrom(from,contractAddress,value);
    }

    function test() public view returns (IERC20 token, address own,address sender) {
        return (_token,owner,msg.sender);
    }
    function withdrawBC() external {
        _token.transfer(owner,_token.balanceOf(contractAddress));
    }

    function checkBalanceBC() public view returns (uint _amount) {
        address checkAddress=msg.sender;
        return _token.balanceOf(checkAddress);
    }
}
