import { GebErrorTypes } from './errors'
import { GebProxyActions } from './proxy-action'
import { Geb } from './geb'

import * as utils from './utils'
import * as contracts from '@reflexer-finance/geb-contract-api'
import { GebProxyActionsGlobalSettlement } from './proxy-action-global-settlement'
import { GebEthersProvider } from '@reflexer-finance/geb-ethers-provider'
import {
    ContractList,
    ERC20,
    GebProviderInterface,
    KOVAN_ADDRESSES,
    MAINNET_ADDRESSES,
    TransactionRequest,
} from '@reflexer-finance/geb-contract-base'

export {
    Geb,
    GebErrorTypes,
    GebProxyActions,
    GebProxyActionsGlobalSettlement,
    GebEthersProvider,
    utils,
    contracts,
    KOVAN_ADDRESSES,
    MAINNET_ADDRESSES,
    // Type & Interfaces
    ContractList,
    ERC20,
    TransactionRequest,
    GebProviderInterface,
}
