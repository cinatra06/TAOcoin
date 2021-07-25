const {
    BN,
    constants,
    expectEvent,
    expectRevert,
    expectThrow,
} = require('@openzeppelin/test-helpers')
const { ZERO_ADDRESS } = constants

const { expect } = require('chai')

const ERC721 = artifacts.require('NFTDAO')

contract('NFTDAO', function (accounts) {
    const deployer = accounts[0]
    const other = accounts[1]
    const otherB = accounts[2]

    const name = 'Turquoise'
    const symbol = 'TRQ'

    const DEFAULT_ADMIN_ROLE =
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    const GOVERNANCE = web3.utils.soliditySha3('GOVERNANCE')
    const VAULT = '0x3b968ff924aAA65656bB2154eB032719f0d6Abf0'
    const GOVTOKEN = '0x761a8d55E02DC0B3D4f1eA8a27E8012495fB0038'

    beforeEach(async function () {
        this.token = await ERC20.new(GOVTOKEN, VAULT)
        console.log(this.token.address)
    })

    it('token has correct name', async function () {
        expect(await this.token.name()).to.equal(name)
    })

    it('token has correct symbol', async function () {
        expect(await this.token.symbol()).to.equal(symbol)
    })

    it('deployer has the default admin role', async function () {
        expect(
            await this.token.getRoleMemberCount(DEFAULT_ADMIN_ROLE)
        ).to.be.bignumber.equal('1')
        expect(await this.token.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.equal(
            deployer
        )
    })

    it('deposit stake to increase NFT allowance', async function () {
        const _amount = new BN('10')
        // expect(web3.eth.getBalance(other).to.greater
        console.log(await web3.eth.getBalance(this.token.address))

        const txn = await web3.eth.sendTransaction({
            to: this.token.address,
            from: deployer,
            value: 1000000000000,
            gas: 100000,
        })
        // const receipt = await this.token.deposit(other, _amount, '0x3b968ff924aAA65656bB2154eB032719f0d6Abf0');
        const balance = await web3.eth.getBalance(this.token.address)

        console.log(balance)
        const availno = await this.token.approved(deployer)
        console.log(availno)
        expect(balance).to.equal('1000000000000')
        // expect(await this.token.getRoleAdmin(MINTER_ROLE)).to.equal(DEFAULT_ADMIN_ROLE);
    })

    describe('minting', function () {
        it('Mint succeeds if sufficient deposit exists', async function () {
            const tokenId = new BN('102')
            //deposit
            const txn = await web3.eth.sendTransaction({
                to: this.token.address,
                from: deployer,
                value: 1000000000000,
                gas: 100000,
            })
            const receipt = await this.token.mint(tokenId, deployer, {
                from: deployer,
            })
            expectEvent(receipt, 'Transfer', {
                from: ZERO_ADDRESS,
                to: deployer,
                tokenId,
            })

            // expect(await this.token.balanceOf()).to.be.bignumber.equal('100');
            expect(await this.token.ownerOf(tokenId)).to.equal(deployer)
            // const receiptB = await this.token.burn(tokenId, { from: other });
            // expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal('0');
        })

        it('Mint fails if insufficient deposit exists', async function () {
            const tokenId = new BN('1')
            //no deposit
            expect(this.token.mint(tokenId, other)).should.be.rejected
            // expect(!result)
        })

        it('Mint fails if tokenid already used', async function () {
            const tokenId = new BN('102')
            //no deposit
            expect(this.token.mint(tokenId, other)).should.be.rejected
            //expect(!result)
        })

        it('Burn tokens succeeds from GOVERNANCE address', async function () {
            const tokenId = new BN('102')
            //deposit
            console.log(tokenId)
            const txn = await web3.eth.sendTransaction({
                to: this.token.address,
                from: deployer,
                value: 1000000000000,
                gas: 100000,
            })
            console.log(txn)
            const receipt = await this.token.mint(tokenId)
            // expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: other, tokenId });

            // expect(await this.token.balanceOf()).to.be.bignumber.equal('100');
            expect(await this.token.ownerOf(tokenId)).to.equal(deployer)
            const receiptB = await this.token.burn(tokenId, { from: other })
            //expect(!receiptB);
            expect(await this.token.balanceOf(deployer)).to.be.bignumber.equal(
                '0'
            )
        })

        it('Burn tokens fails from any other address', async function () {
            const tokenId = new BN('102')
            //deposit
            console.log(tokenId)
            const txn = await web3.eth.sendTransaction({
                to: this.token.address,
                from: deployer,
                value: 1000000000000,
                gas: 100000,
            })
            console.log(txn)
            const receipt = await this.token.mint(tokenId)
            // expectEvent(receipt, 'Transfer', { from: ZERO_ADDRESS, to: other, tokenId });

            // expect(await this.token.balanceOf()).to.be.bignumber.equal('100');
            expect(await this.token.ownerOf(tokenId)).to.equal(deployer)
            expectThrow(await this.token.burn(tokenId, { from: otherB }))
            // expectEvent(receiptB, 'Error')
        })
    })

    describe('burning', function () {
        it('Only Governance contract or a holder can burn their tokens', async function () {
            const tokenId = new BN('130')
            const txn = await web3.eth.sendTransaction({
                to: this.token.address,
                from: other,
                value: 1000000000000,
                gas: 100000,
            })

            const receiptC = await this.token.mint(tokenId)

            const receipt = await this.token.burn(tokenId, { from: other })

            expectEvent(receipt, 'Transfer', {
                from: other,
                to: ZERO_ADDRESS,
                tokenId,
            })

            expect(await this.token.balanceOf(other)).to.be.bignumber.equal('0')
            expect(await this.token.totalSupply()).to.be.bignumber.equal('0')
        })
    })
})
