import React from 'react'
import { Helmet } from "react-helmet";
import Layout from './Layout'

const Order = () => {
    return (
        <Layout>
            <Helmet>
                <title>Offers</title>
                <meta name="title" content="ScaleX - Offers"/>
                <meta name="description" content="ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            
        </Layout>
    )
}

export default Order
