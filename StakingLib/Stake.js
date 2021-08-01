
const { BN, constants, expectEvent, expectRevert, expectThrow } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
// const { DATAFILE2} = require('./filedata.json')
var fs = require('fs');

const { expect } = require('chai');
// const { web3 } = require('web3')

const TAO = artifacts.require('TAO');
const StakeAmt = process.env.STAKE;
const Stakefull = StakeAmt * 10**18;
const wallet = Wallet.fromMnemonic(process.env.MNEMONIC);
const addr = wallet.address;


function fsReadFileSynchToArray (filePath) {
    var data = JSON.parse(fs.readFileSync(filePath));
    console.log(data);
    return data;
}

module.exports = async (callback) => {
    const Coin = TAO.at("0x9FD4969573F9DEC7882409709C9B35F2dc3074ca");
    // let destadd = '0x4eA82B28708c2428d4FF04bB40cf61ca02EbF721';
    const l = [];
    console.log('stall12');

    const coin2 = await Coin;
    await coin2.approve(addr, String(100000*10**18)) //update if staking over 100,000 TAO

    coin2.unstake(Stakefull);
    console.log("Staked "+ StakeAmt.toString + "TAO!")
