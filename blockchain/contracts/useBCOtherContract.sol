// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

import "./ERC20/IERC20.sol";

contract BCTokenActions {
    IERC20 private _token;

    constructor (IERC20 token) {
        _token = token;
    }

    function transferBC(uint _value) external {
        address from = msg.sender;
        _token.transferFrom(from, address(this), _value);
    }

    function withdrawBC() external {
        address to = msg.sender;
        _token.transferFrom(address(this), to, address(this).balance);
    }

    function checkBalanceBC() public view returns (uint _amount) {
        return 123;
    }
}
