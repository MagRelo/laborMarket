pragma solidity 0.4.24;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

// import "./BancorFormula.sol";
// import "./Power.sol";
// TEST: "0x106F681949E222D57A175cD85685E3bD9975b973","TEST", "TEST", 100000000000000, 300000, 1000

contract Servesa is ERC721Token {
  using SafeMath for uint256;

  uint public version = 0;
  uint32 MAX_WEIGHT = 1000000;
  
  address public owner;
  address public provider;
  string public tokenName;
  string public tokenSymbol;
  
  uint256 public tokenBasePrice = 100000000000;
  uint32 public tokenReserveRatio = 300000;
  uint256 public maxTokens = 1000;
  

  uint256 public totalTokensSupply = 0;
  uint256 public contractBalance = 1;
  
  // Store the value of each token
  mapping(uint256 => uint256) internal tokenValues;

  event NewContract(address ownerAddress, string tokenSymbol);
  event FallbackEvent(address sender, uint amount);
  event Buy(address sender, uint256 valueSent, uint256 tokenID, uint256 tokenUnitValue);
  event Transfer(address sender, uint256 tokenUnitValue);



  /*
  * Constructor
  */
  
  constructor (
    address ownerAddress,
    string tokenNameInit,
    string tokenSymbolInit,
    uint256 tokenBasePriceInit,
    uint32 tokenReserveRatioInit,
    uint256 maxTokensInit) ERC721Token (tokenNameInit, tokenSymbolInit) public {

    // setup parent contract as provider
    provider = msg.sender;

    // setup contract parameters
    owner = ownerAddress;
    tokenName = tokenNameInit;
    tokenSymbol = tokenSymbolInit;
    tokenBasePrice = tokenBasePriceInit;
    tokenReserveRatio = tokenReserveRatioInit;
    maxTokens = maxTokensInit;

    emit NewContract(owner, tokenSymbol);
  }


  // modifiers
  modifier belowMaxTokens() {
    require(totalTokensSupply < maxTokens);
    _;
  }

  /*
  * External accounts can pay directly to contract - bonus!
  */
  function () payable public {
    emit FallbackEvent(msg.sender, msg.value);
  }

  /*
  * Buy: exchange ETH for tokens
  */
  function buy() payable public  {

    
    // price     
    require(msg.value > tokenBasePrice);
    uint256 tokenUnitValue = _calcPurchaseReturn(msg.value);
    
    /*
    * create ERC721
    */
    uint256 tokenNumber = allTokens.length;
    super._mint(msg.sender, tokenNumber);
    
    /*
    * add tokenUnitValue to metadata
    */
    _setTokenValue(tokenNumber, tokenUnitValue);


    // event
    emit Buy(msg.sender, msg.value, tokenNumber, tokenUnitValue);
  }
  
  
  function reedeem(uint32 tokenId, uint32 tokenUnits) public  {
      
    // validate sender owns token
    require(msg.sender == ownerOf(tokenId));
    
    // transfer tokenUnitValue to contract owner
    
    
    // emit event
    emit Transfer(msg.sender, tokenUnits);    
  }
  
  function sell(uint32 tokenId) payable public  {
      
    // validate:
    // sender owns token
    
    // burn token
    
    // return value form contract

  }
  
  

  function _calcPurchaseReturn(uint256 valueSent) public view returns (uint256) {
    return valueSent.div(tokenBasePrice);
  }  
  
  function _getTokenValue(uint256 _tokenId) public view returns (uint256) {
    return tokenValues[_tokenId];
  }
  function _setTokenValue(uint256 _tokenId, uint256 _value) internal {
    tokenValues[_tokenId] = _value;
  }
  

}