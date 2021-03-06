import React, { useState, useEffect } from 'react'
import { Col, Card } from 'reactstrap'
import axios from 'axios'

import ArrowGreen from '../images/New/arrow-green.svg'
import Litecoin from '../images/litecoin.png'

const LiteCoinPrice = () => {
    const [ prices, setPrices] = useState(0)
    const [ naira, setNaira] = useState(0)

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/ltc-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            // States
            setPrices(usd)
          
        } catch (err) {
            console.log(err)
        }

        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/ltc-ngn/spot")
            let ngn = res.data.data.amount
            ngn = parseFloat(ngn.replace(/,/g,''))
            ngn = ngn.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            setNaira(ngn)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
       setInterval(() => {
        fetchBTCPriceData()
       }, 3000);
    
    }, [setPrices, setNaira])



    return (
        <Col>
        <Card className="scalex-section-two__card">
            <div className="d-flex align-items-center pb-4">
                <span><img src={Litecoin} className="scalex-section-two__card--coin-image" alt="Ethereum"/></span> 
                <p className="mb-0 pl-1">Litecoin</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <span>
                    <h4>$ {prices}</h4>
                    <h5>₦ {naira}</h5>
                </span>
                <span>
                    <h4><img src={ArrowGreen} alt="Ethereum" className="scalex-section-two__card--coin-arrow ml-2" /></h4>
                    <h5 className="text-green">1.3%</h5>
                </span>
            </div>
        </Card>
    </Col>
    )
}

export default LiteCoinPrice
