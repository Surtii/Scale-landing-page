import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'reactstrap'

const BtcPrice = () => {

    const [ prices, setPrice] = useState(0)
    const [ naira, setNaira] = useState(0.00)
    const [ baseCurrency, setBaseCurrency ] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/btc-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            // States
            setPrice(usd)
            setBaseCurrency(res.data.data.base)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }

        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/btc-ngn/spot")
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
    
    }, [setPrice, setBaseCurrency, setNaira])


    return (
        <div className="item">
            <div className="main-wrapper">
                {
                    loading ? (
                        <Spinner/>
                    ): (
                        <>
                            <div className="amount">${''}{prices}</div>
                            <h6 className="title">&#8358;{''}{naira}</h6>
                            <div className="current-info range-up">
                                <i className="icon flaticon-down-caret"></i>
                                <span className="rate">{baseCurrency}</span>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}



export default BtcPrice
