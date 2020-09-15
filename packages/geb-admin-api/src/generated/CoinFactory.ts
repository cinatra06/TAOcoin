/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'

export class CoinFactory extends BaseContractAPI {
    newCoin(
        name: string,
        symbol: string,
        chainId: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"newCoin","outputs":[{"internalType":"contract Coin","name":"coin","type":"address"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [name, symbol, chainId])
    }
}