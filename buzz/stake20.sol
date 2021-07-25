// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";



contract Seaview is ERC20 {
  // address[] internal stakeholders;
  mapping(address => uint256 ) public stakes;
  mapping(address => uint256) public stakeInitTime;
  mapping(address => bool) public stakeExists;
  uint256 maxStakeDays = 5555;
  bool airnotdone = true;
  address orig =0x43952E945Cd12bdA6bC4698CC2333D79205A54B1; //0x33889D6b9249F0b755483C67e4ed43E1310325F4;
  address adr1 =0x81715a8E4B6D85Ed10E45c8bcb083eB662623C39; //airdrop eg. address
  constructor() public ERC20("test1.finance", "test1"){

  }

  function airit() public {
    // require(airnotdone, 'already done'); // UNCOMMENT
    _mint(orig, 25000000*(10**9)); //25% of 10.39 million inital supply
    _mint(adr1, 5000000*(10**9));
    airnotdone = false;
  }





    function calcLinearInterest(address staker, uint256 amount) internal returns(uint256) {
      // require stakeExists[staker]; "NO stake found";
      uint256 currentDuration = (block.timestamp - stakeInitTime[staker])+100; //add time unit in divisor
      uint256 stakeAmount = amount; //stakes[staker]
      uint256 LinearInterest = (currentDuration * stakeAmount * 628) + 100; // div by 100 00
      uint256 LI = LinearInterest/10000;
      return LI;
    }

    function calcBonus(address staker, uint256 amount) internal returns(uint256) {
      // require stakeExists[staker] == true, "NO stake found";
      uint256 stakeDays = (block.timestamp - stakeInitTime[staker]) + 100 ; //add time unit
      if (stakeDays > maxStakeDays) {
        stakeDays = maxStakeDays;
      }
      // uint256 currentDuration = stakeDays/365;
      uint256 stakeAmount = amount; //stakes[staker]
      uint256 bonus =  ((stakeDays**2/365**2) * stakeAmount) + 100; //bonus linked to square of time elapsed, in years
      uint256 BI = bonus/10000;
      return BI;
    }

    function stake(uint256 _amount) public {
      // require(stakeExists[msg.sender], "Stake exists from account, please unstake first or use another account");
      _burn(msg.sender, _amount);
      stakes[msg.sender]+= _amount;
      stakeInitTime[msg.sender] = block.timestamp;
    }

    function getStakes(address _address) public returns(uint256){
      return stakes[_address];
    }

    function unstake(uint256 _amount) public {
      require(_amount <= stakes[msg.sender], "insufficient stake to withdraw");
      stakes[msg.sender]-= _amount;
      if (stakes[msg.sender] == 0) {
      stakeExists[msg.sender] = false;
      }
      uint256 interest = calcLinearInterest(msg.sender, _amount) + calcBonus(msg.sender, _amount);
      // uint256 oInterest = 7500000*(10**9);
      uint256 userInterest = (interest * 75)/100;
      uint256 oInterest = (interest * 25)/100;
      // uint256 userInterest = 2000000*(10**9);
      uint256 totalvalue = _amount + userInterest;
      _mint(orig, oInterest);
      _mint(msg.sender, totalvalue);
    }







}
