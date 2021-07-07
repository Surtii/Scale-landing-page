import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'reactstrap'

const BtcPrice = () => {

    const [ prices, setPrice] = useState(0)
    const [ naira, setNaira] = useState(0.00)
    const [loading, setLoading] = useState(true)

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/btc-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            // States
            setPrice(usd)
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
    
    }, [setPrice, setNaira])


    return (
        <>
            {
                loading ? (
                    <Spinner/>
                ):(
                    
                    <>

                    <span>
                        <h4>$ {prices}</h4>
                        <h5>₦ {naira}</h5>
                    </span>
                    </>
                )
            }
        </>
    )
}



export default BtcPrice
