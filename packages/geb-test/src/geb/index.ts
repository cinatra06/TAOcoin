import { GebEthersProvider } from '@reflexer-finance/geb-ethers-provider'
import { ethers } from 'ethers'
import { MAKER_KOVAN_NODE, MAKER_MAINNET_NODE } from './../const'
import { testsProxyActionWithGenericGebProvider } from './proxy-actions'
import { testsGeb } from './geb'
import { KOVAN_ADDRESSES, MAINNET_ADDRESSES, RSKTEST_ADDRESSES } from 'geb.js'

describe('Test Geb', async () => {
    // Kovan

    /*
    const providerKovan = new ethers.providers.StaticJsonRpcProvider(
        MAKER_KOVAN_NODE
    )

    const gebProviderKovan = new GebEthersProvider(providerKovan)

    testsProxyActionWithGenericGebProvider(
        gebProviderKovan,
        KOVAN_ADDRESSES,
        'kovan'
    )
    testsGeb(gebProviderKovan, MAKER_KOVAN_NODE, 'kovan', KOVAN_ADDRESSES)

    // Mainnet
    const providerMainnet = new ethers.providers.StaticJsonRpcProvider(
        MAKER_MAINNET_NODE
    )
    const gebProviderMainnet = new GebEthersProvider(providerMainnet)
    testsProxyActionWithGenericGebProvider(
        gebProviderMainnet,
        MAINNET_ADDRESSES,
        'mainnet'
    )
    testsGeb(
        gebProviderMainnet,
        MAKER_MAINNET_NODE,
        'mainnet',
        MAINNET_ADDRESSES
    )
    */
    const gebProviderRSKTest = new ethers.providers.StaticJsonRpcProvider(
        SOVRYN_RSKTEST_RPC
    )

    const gebProviderRSKTest = new GebEthersProvider(gebProviderRSKTest)

    testsProxyActionWithGenericGebProvider(
        gebProviderRSKTest,
        RSKTEST_ADDRESSES,
        'RSK_testnet'
    )
    testsGeb(
        gebProviderKovan,
        SOVRYN_RSKTEST_RPC,
        'RSK_testnet',
        RSKTEST_ADDRESSES
    )

    // TODO: test against infura
    // testsGeb(gebProvider, INFURA_KOVAN)
})
