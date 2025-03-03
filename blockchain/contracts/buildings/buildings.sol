// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

import "openzeppelin/contracts/token/ERC721/ERC721.sol";
import "openzeppelin/contracts/utils/Counters.sol";

contract Buildings is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Building {
        string name;
        uint level;
        uint timeFromSpend;
    }
    
    mapping(uint256 => Building) TokenId_ToBuilding;
    mapping(address => uint256[]) Address_ToTokens;
    
    constructor() public ERC721("Building", "BD") {}

    
    function createBuilding(
        string memory name,
        string memory tokenURI
    ) public external returns (uint256) {
        address sender = msg.sender;
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);

        TokenId_ToBuilding[newItemId] = Building(name,1,block.timestamp);
        Address_ToTokens[msg.sender].push(newItemId);

        return newItemId;
    }
    
    function getBuildingsTokenIds () public external view returns (uint[]) {
        return Address_ToTokens[msg.sender];
    }

    function getBuilding (uint256 tokenId) public external view returns (Building) {
        require(ownerOf(tokenId)==msg.sender);
        return TokenId_ToBuilding(tokenId);
    }

    function upLevelBuilding (uint256 tokenId) public payable returns (uint) {
        require(ownerOf(tokenId)==msg.sender);
        require(msg.value==1);

        address payable hola=address(msg.sender);
        hola.sendValue(recipient, amount);
        TokenId_ToBuilding[tokenId].level++;
        
        return TokenId_ToBuilding[tokenId].level;
    }

    function withDraw () external {
        address payable sender=msg.sender;
        sender.transfer(address(this).balance);
    }

    function payLoadBuilding (uint256 tokenId) public external {
        require(ownerOf(tokenId)==msg.sender);
    } 

    function transferBuilding (address to) public external {

    }


}
