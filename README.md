# TAO COIN

This is the full Codebase For the TAO Coin and TAO Decentralised Time deposit(staking) contracts, with exponential Returns.

Contract is deployed on Polygon Mainnet: 0x9FD4969573F9DEC7882409709C9B35F2dc3074ca

All users of Quickswap exhange (~133K unique address) have been airdropped TAO tokens as initial liquidity. 75 million tokens have been airdropped, while 25% remain in cold storage at the origin. Further tokens will be minted by the contract only as inflationary rewards to stakers. This airdrop is currently in progress and will be completed over the next 24 hours. (~20% done at time of writing).


TAO tests a unique game theory thesis that inflation in supply can actually cause a deflating liquid supply, if it is directed properly. TAO optimises the principles of Monetary Theory to create an asset that:
i) Appreciates in value quickly and massively, tending towards infinite value
ii) Aligns participants towards long-term success of the currency.
iii) Is purely reward based. Stakes can be withdrawn at any time with 0 penalty, apart from missing out on the ever growing bonus interest rate.

Mathematically, TAO offers bonus interest in proportion to the square of the days a person has staked.

# Staking Contract interface

We provide an easy-to-use staking CLI libraries.

To Stake TAO:

1. Export ENV variables:
```
export MNEMONIC = "mountain clouds ... "
export STAKE = <stake amount in TAO>
```

2. Give stake command:
```
truffle run StakingLib/Stake.js
```

To unstake TAO:

1. Export ENV variables:
```
export MNEMONIC = "mountain clouds ... "
export UNSTAKE = <unstake amount in TAO>
```

2. Give unstake command:
```
truffle run StakingLib/unStake.js
```

In addition, anyone can also stake by directly calling the "stake" and "unstake" functions directly on the contract address above.

The functions are fairly intutive and only take _amount_ as an argument.
You cannot stake again without withdrawing your previous stake. Unstake has a sanity check that staked amount >= unstake requested.

You can unstake any amount at any time with no penalties, your bonus interest will be calculated pro rata on the unstaked portion and given out, while the rest of your tokens continue to earn interest.


Whitepaper :  https://ipfs.io/ipfs/QmY1ux3avsMDEtpTAhSsEZyHaggcEFGZhNCg5MGH3qvSme
