import React from 'react'
import BtcPrice from './New/BtcPrice'
// import DASHCoinPrice from './New/DASHCoinPrice'
import DogePrice from './New/DogePrice'
import EthPrice from './New/EthPrice'
import LiteCoinPrice from './LiteCoinPrice'


const AllPrices = () => {

    return (
        <>
            <BtcPrice/>
            <EthPrice/>
            <LiteCoinPrice/> 
            <DogePrice/>
        </>
    )
}

export default AllPrices
