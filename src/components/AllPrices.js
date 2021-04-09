import React from 'react'
import BtcPrice from './BtcPrice'
import DASHCoinPrice from './DASHCoinPrice'
import ETHCoinPrice from './ETHCoinPrice'
import LiteCoinPrice from './LiteCoinPrice'


const AllPrices = () => {

    return (
        <>
            <BtcPrice/>
            <LiteCoinPrice/>
            <ETHCoinPrice/>
            <DASHCoinPrice/>
        </>
    )
}

export default AllPrices
