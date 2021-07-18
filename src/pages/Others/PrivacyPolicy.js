import React from 'react'
import { Helmet } from "react-helmet";

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';


const PrivacyPolicy = ( ) => {

    return(
        <Layout>
            <Helmet>
                <title>Fees</title>
                <meta name="title" content="ScaleX - Fees"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            <section className="scalex-privacy-policy">
                <h2 className="scalex-privacy-policy--title">Privacy Policy</h2>
            </section>
        </Layout>
        
    )
}

export default PrivacyPolicy