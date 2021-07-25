const {
    BN,
    constants,
    expectEvent,
    expectRevert,
    expectThrow,
} = require('@openzeppelin/test-helpers')
const { ZERO_ADDRESS } = constants
const { DATAFILE2 } = require('./filedata.json')
var fs = require('fs')

const { expect } = require('chai')
// const { web3 } = require('web3')

const ERC20 = artifacts.require('Seaview')

function fsReadFileSynchToArray(filePath) {
    var data = JSON.parse(fs.readFileSync(filePath))
    console.log(data)
    return data
}

contract('Seaview', function (accounts) {
    const deployer = accounts[0]
    const other = accounts[1]
    const otherB = accounts[2]

    const name = 'test1.finance'
    const symbol = 'test1'
    const adr1 = '0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504' //airdrop eg. address
    const orig = '0x43952E945Cd12bdA6bC4698CC2333D79205A54B1'
    const DEFAULT_ADMIN_ROLE =
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    // const GOVERNANCE = web3.utils.soliditySha3('GOVERNANCE');
    // const VAULT = "0x3b968ff924aAA65656bB2154eB032719f0d6Abf0";
    // const GOVTOKEN = "0x761a8d55E02DC0B3D4f1eA8a27E8012495fB0038";
    const DATAFILE = '/Users/dhruv/Documents/tao/tao2/boing/test/filedata.json'
    // const addList = fsReadFileSynchToArray(DATAFILE);
    // console.log(addList);
    const addList = [
        '0x9E0136b4ED959FDe7BE8dC308cb4f92855E4C197',
        '0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504',
        '0xc966Ba2a41888B6B4c5273323075B98E27B9F364',
        '0xEF5dc33A53DD2ED3F670B53F07cEc5ADD4D80504',
    ]
    const balList = [96000000, 77000000, 828282828, 26000000]
    beforeEach(async function () {
        //this.token = await ERC20.new();
        this.token = Seaview('0x1D2388cbBC7443fe05C7Bc7daC92531A9e4C9478')
        console.log(this.token.address)
        this.token.airit(addList, balList)
    })

    it('token has correct name', async function () {
        expect(await this.token.name()).to.equal(name)
    })

    it('token has correct symbol', async function () {
        expect(await this.token.symbol()).to.equal(symbol)
    })

    describe('Inital mint', function () {
        it('Mint to origin, airdrop, check balance', async function () {
            // const tokenId = new BN('102');
            console.log('Hello')
            setTimeout(() => {
                console.log('World!')
            }, 2000)
            this.token.airit(addList, balList)
            const bal = await this.token.balanceOf(
                '0x43952E945Cd12bdA6bC4698CC2333D79205A54B1'
            )
            console.log(bal)
            console.log('gollo')
            //deposit
            //const txn = await web3.eth.sendTransaction({to:this.token.address, from:deployer, value: 1000000000000, gas: 100000})
            // const receipt = await this.token.mint(tokenId, deployer, {from: deployer});
            // expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: deployer, tokenId });

            // expect(await this.token.balanceOf('0x43952E945Cd12bdA6bC4698CC2333D79205A54B1')).to.be.bignumber.equal('2500001');
            // this.token.airit();
            // const bigval = web3.utils.toWei(500000, "ether");
            // const val = new BN('500000');
            const number = String(2000000 * 10 ** 9)
            const number2 = String(3000000 * 10 ** 9)
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(192000000 * 10 ** 9)
            )
            await this.token.stake(number, { from: adr1 }) //
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(190000000 * 10 ** 9)
            )

            // expect(await this.token.balanceOf('0x43952E945Cd12bdA6bC4698CC2333D79205A54B1')).to.be.bignumber.equal(String(2000000*(10**9)));
            // this.token.unstake(number2, {from: adr1}); // 5mil - 4 mil + 3 mil = 4 mil
            //expect(await this.token.ownerOf(tokenId)).to.equal(deployer);
            // const receiptB = await this.token.burn(tokenId, { from: other });
            // expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
        })

        it('stake tokens', async function () {
            //const tokenId = new BN('1');
            //no deposit
            // this.token.airit();
            // const bigval = web3.utils.toWei(500000, "ether");
            const number = 4000000 * 10 ** 9
            const val = new BN('500000')
            this.token.stake(number, { from: adr1 })
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(188000000 * 10 ** 9)
            )
            // expect(await this.token.getStakes(orig)).to.be.bignumber.equal('500000');
            // expect(this.token.mint(tokenId, other)).should.be.rejected;
            // expect(!result)
        })

        it('Unstake', async function () {
            //const tokenId = new BN('102');
            //no deposit
            // this.token.airit();
            // expect(await this.token.balanceOf('0x43952E945Cd12bdA6bC4698CC2333D79205A54B1')).to.be.bignumber.equal('2500000');
            // const bigval = web3.toWei('500000', "ether");
            const number = 4000000 * 10 ** 9
            const n2 = 1000000 * 10 ** 9
            this.token.stake(number, { from: adr1 })
            this.token.unstake(n2, { from: adr1 })
            expect(await this.token.balanceOf(adr1)).to.be.bignumber.equal(
                String(192000000 * 10 ** 9)
            )
            // expect(this.token.mint(tokenId, other)).should.be.rejected;
            //expect(!result)
        })
    })
    /*
  describe('burning', function () {
    it('Only Governance contract or a holder can burn their tokens', async function () {
      const tokenId = new BN('130');
      const txn = await web3.eth.sendTransaction({to:this.token.address, from:other, value: 1000000000000, gas: 100000});

      const receiptC = await this.token.mint(tokenId);

      const receipt = await this.token.burn(tokenId, { from: other });

      expectEvent(receipt, 'Transfer', { from: other, to: ZERO_ADDRESS, tokenId });

      expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0');
      expect(await this.token.totalSupply()).to.be.bignumber.equal('0');
    });

  });
  */
})
