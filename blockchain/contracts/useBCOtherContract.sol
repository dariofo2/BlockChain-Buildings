// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

import "./ERC20/IERC20.sol";

contract BCTokenActions {
    IERC20 _token;
    address private owner;
    //Constructor IERC20 token is the Contract Address of the ERC20 Created Crypto
    constructor (address token) {
        _token = IERC20(token);
        owner = msg.sender;
    }

    function transferBC(uint value) public returns (bool isDone) {
        address myAddress = address(bytes20(bytes("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")));
        //address from = msg.sender;
        return _token.transferFrom(msg.sender,myAddress,value);
    }

    function test() public view returns (IERC20 token, address own,address sender) {
        return (_token,owner,msg.sender);
    }
    function withdrawBC() external {
        address to = msg.sender;
        _token.transferFrom(address(this), to, 500);
    }

    function checkBalanceBC() public view returns (uint _amount) {
        address checkAddress=msg.sender;
        return _token.balanceOf(checkAddress);
    }
}
