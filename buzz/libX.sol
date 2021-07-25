pragma solidity ^0.8.0;

library LibX {
  uint8[] BL = new uint8[](4);
  bytes32[] AL = new bytes32[](4);
  // bytes32[] public storage
  AL = [0x43952E945Cd12bdA6bC4698CC2333D79205A54B1,0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504,0xc966Ba2a41888B6B4c5273323075B98E27B9F364,0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504];
  // uint[] public storage
  BL = [797777771,77000000,828282828,26000000];
  function a() public returns (bytes32[]){
      return AL;
  }
  function b() public returns (memory uint[]){
    return BL;
}
}
