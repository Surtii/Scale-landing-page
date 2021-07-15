import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Card } from 'reactstrap'


import ArrowRed from '../../images/New/arrow-red.svg'
import Doge from '../../images/doge-logo.png'

const DogePrice = () => {
    const [ ETHCoinPrices, setETHCoinPrices] = useState(0)
    const [ naira, setNaira] = useState(0)

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/doge-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            // States
            setETHCoinPrices(usd)
       
        } catch (err) {
            console.log(err)
        }

        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/doge-ngn/spot")
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
    
    }, [setETHCoinPrices, setNaira])




    return (

        <>
            <Col>
                <Card className="scalex-section-two__card">
                    <div className="d-flex align-items-center pb-4">
                        <span><img src={Doge} className="scalex-section-two__card--coin-image" alt="Ethereum"/></span> 
                        <p className="mb-0 pl-1">Doge</p>
                    </div>
            
                    <div className="d-flex justify-content-between align-items-center">
                        <span>
                            <h4>$ {ETHCoinPrices}</h4>
                            <h5>₦ {naira}</h5>
                        </span>
                        <span>
                            <h4><img src={ArrowRed} alt="Arrow" className="scalex-section-two__card--coin-arrow ml-2" /></h4>
                            <h5 className="text-green">10.8%</h5>
                        </span>
                    </div>
                </Card>
            </Col>
        </>
    )
}

export default DogePrice
