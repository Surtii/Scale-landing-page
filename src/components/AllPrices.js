import React from 'react'
import BtcPrice from './BtcPrice'
import DogePrice from './DogePrice'
import EthPrice from './EthPrice'
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
