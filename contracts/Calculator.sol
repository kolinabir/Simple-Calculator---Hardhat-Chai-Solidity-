// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/math/SafeMath.sol";
// import "https://github.com/ConsenSysMesh/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Calculator is Ownable {
    using SafeMath for uint256;
    uint256 _addResult;
    uint256 _subResult;
    uint256 _mulResult;
    uint256 _divResult;

    constructor() {
        Ownable(msg.sender);
    }

    function addItem(uint256 a, uint256 b) public onlyOwner {
        _addResult = a.add(b);
    }

    function subtractItem(uint256 a, uint256 b) public onlyOwner {
        _subResult = a.sub(b);
    }

    function multiply(uint256 a, uint256 b) public onlyOwner {
        _mulResult = a.mul(b);
    }

    function divide(uint256 a, uint256 b) public onlyOwner {
        _divResult = a.div(b);
    }

    function getLastResult() public view returns (uint256) {
        return _addResult;
    }

    function getLast_SubResult() public view returns (uint256) {
        return _subResult;
    }

    function getLast_MulResult() public view returns (uint256) {
        return _mulResult;
    }

    function getLast_DivResult() public view returns (uint256) {
        return _divResult;
    }
}
