/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class GebProxyLeverageActions extends BaseContractAPI {
    allowHandler(
        manager: string,
        usr: string,
        ok: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"ok","type":"uint256"}],"name":"allowHandler","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, usr, ok])
    }

    allowSAFE(
        manager: string,
        safe: BigNumberish,
        usr: string,
        ok: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"ok","type":"uint256"}],"name":"allowSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, usr, ok])
    }

    approveSAFEModification(
        safeEngine: string,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safeEngine","type":"address"},{"internalType":"address","name":"usr","type":"address"}],"name":"approveSAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safeEngine, usr])
    }

    coinJoin_join(
        apt: string,
        safeHandler: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safeHandler","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"coinJoin_join","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [apt, safeHandler, wad])
    }

    denySAFEModification(safeEngine: string, usr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safeEngine","type":"address"},{"internalType":"address","name":"usr","type":"address"}],"name":"denySAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safeEngine, usr])
    }

    enterSystem(
        manager: string,
        src: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"enterSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, src, safe])
    }

    ethJoin_join__AddressAddress(
        ethValue: BigNumberish,
        apt: string,
        safe: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safe","type":"address"}],"name":"ethJoin_join","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [apt, safe],
            BigNumber.from(ethValue)
        )
    }

    ethJoin_join__AddressAddressUint256(
        ethValue: BigNumberish,
        apt: string,
        safe: string,
        value: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ethJoin_join","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [apt, safe, value],
            BigNumber.from(ethValue)
        )
    }

    exitETH(
        manager: string,
        ethJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"exitETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, ethJoin, safe, wad])
    }

    flashDeleverage(
        uniswapV2Pair: string,
        manager: string,
        ethJoin: string,
        taxCollector: string,
        coinJoin: string,
        weth: string,
        callbackProxy: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapV2Pair","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"weth","type":"address"},{"internalType":"address","name":"callbackProxy","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"flashDeleverage","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            uniswapV2Pair,
            manager,
            ethJoin,
            taxCollector,
            coinJoin,
            weth,
            callbackProxy,
            safe,
        ])
    }

    flashDeleverageFreeETH(
        uniswapV2Pair: string,
        manager: string,
        ethJoin: string,
        taxCollector: string,
        coinJoin: string,
        weth: string,
        callbackProxy: string,
        safe: BigNumberish,
        amountToFree: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapV2Pair","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"weth","type":"address"},{"internalType":"address","name":"callbackProxy","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"amountToFree","type":"uint256"}],"name":"flashDeleverageFreeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            uniswapV2Pair,
            manager,
            ethJoin,
            taxCollector,
            coinJoin,
            weth,
            callbackProxy,
            safe,
            amountToFree,
        ])
    }

    flashLeverage(
        uniswapV2Pair: string,
        manager: string,
        ethJoin: string,
        taxCollector: string,
        coinJoin: string,
        weth: string,
        callbackProxy: string,
        safe: BigNumberish,
        leverage: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapV2Pair","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"weth","type":"address"},{"internalType":"address","name":"callbackProxy","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"leverage","type":"uint256"}],"name":"flashLeverage","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            uniswapV2Pair,
            manager,
            ethJoin,
            taxCollector,
            coinJoin,
            weth,
            callbackProxy,
            safe,
            leverage,
        ])
    }

    freeETH(
        manager: string,
        ethJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"freeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, ethJoin, safe, wad])
    }

    generateDebt(
        manager: string,
        taxCollector: string,
        coinJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"generateDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            taxCollector,
            coinJoin,
            safe,
            wad,
        ])
    }

    lockETH(
        ethValue: BigNumberish,
        manager: string,
        ethJoin: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"lockETH","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [manager, ethJoin, safe],
            BigNumber.from(ethValue)
        )
    }

    lockETHAndGenerateDebt(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        safe: BigNumberish,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"lockETHAndGenerateDebt","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [manager, taxCollector, ethJoin, coinJoin, safe, deltaWad],
            BigNumber.from(ethValue)
        )
    }

    lockETHLeverage(
        ethValue: BigNumberish,
        uniswapV2Pair: string,
        manager: string,
        ethJoin: string,
        taxCollector: string,
        coinJoin: string,
        weth: string,
        callbackProxy: string,
        safe: BigNumberish,
        leverage: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapV2Pair","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"weth","type":"address"},{"internalType":"address","name":"callbackProxy","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"leverage","type":"uint256"}],"name":"lockETHLeverage","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                uniswapV2Pair,
                manager,
                ethJoin,
                taxCollector,
                coinJoin,
                weth,
                callbackProxy,
                safe,
                leverage,
            ],
            BigNumber.from(ethValue)
        )
    }

    modifySAFECollateralization(
        manager: string,
        safe: BigNumberish,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"modifySAFECollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            safe,
            deltaCollateral,
            deltaDebt,
        ])
    }

    moveSAFE(
        manager: string,
        safeSrc: BigNumberish,
        safeDst: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safeSrc","type":"uint256"},{"internalType":"uint256","name":"safeDst","type":"uint256"}],"name":"moveSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safeSrc, safeDst])
    }

    openLockETHAndGenerateDebt(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        collateralType: BytesLike,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"openLockETHAndGenerateDebt","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                collateralType,
                deltaWad,
            ],
            BigNumber.from(ethValue)
        )
    }

    openLockETHLeverage(
        ethValue: BigNumberish,
        uniswapV2Pair: string,
        manager: string,
        ethJoin: string,
        taxCollector: string,
        coinJoin: string,
        weth: string,
        callbackProxy: string,
        leverage: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapV2Pair","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"weth","type":"address"},{"internalType":"address","name":"callbackProxy","type":"address"},{"internalType":"uint256","name":"leverage","type":"uint256"}],"name":"openLockETHLeverage","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                uniswapV2Pair,
                manager,
                ethJoin,
                taxCollector,
                coinJoin,
                weth,
                callbackProxy,
                leverage,
            ],
            BigNumber.from(ethValue)
        )
    }

    openSAFE(
        manager: string,
        collateralType: BytesLike,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"usr","type":"address"}],"name":"openSAFE","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, collateralType, usr])
    }

    quitSystem(
        manager: string,
        safe: BigNumberish,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"quitSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst])
    }

    repayDebt(
        manager: string,
        coinJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"repayDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, coinJoin, safe, wad])
    }

    repayDebtAndFreeETH(
        manager: string,
        ethJoin: string,
        coinJoin: string,
        safe: BigNumberish,
        collateralWad: BigNumberish,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"collateralWad","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"repayDebtAndFreeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            ethJoin,
            coinJoin,
            safe,
            collateralWad,
            deltaWad,
        ])
    }

    transfer(
        collateral: string,
        dst: string,
        amt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"collateral","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateral, dst, amt])
    }

    transferCollateral(
        manager: string,
        safe: BigNumberish,
        dst: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst, wad])
    }

    transferInternalCoins(
        manager: string,
        safe: BigNumberish,
        dst: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"transferInternalCoins","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst, rad])
    }

    transferSAFEOwnership(
        manager: string,
        safe: BigNumberish,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"usr","type":"address"}],"name":"transferSAFEOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, usr])
    }

    transferSAFEOwnershipToProxy(
        proxyRegistry: string,
        manager: string,
        safe: BigNumberish,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"proxyRegistry","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"transferSAFEOwnershipToProxy","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            proxyRegistry,
            manager,
            safe,
            dst,
        ])
    }

    uniswapV2Call(
        _sender: string,
        _amount0: BigNumberish,
        _amount1: BigNumberish,
        _data: BytesLike
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV2Call","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            _sender,
            _amount0,
            _amount1,
            _data,
        ])
    }
}
