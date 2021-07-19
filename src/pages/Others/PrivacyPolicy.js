import React from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

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
                <Container className="scalex-privacy-policy--title-bg">
                    <Row>
                        <Col>
                            <h2 className="scalex-privacy-policy--title">Privacy Policy</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    
                    <Row>
                        <Col>
                            <div className="scalex-privacy-policy__wrapper">
                                <h3>Introduction</h3>
                                <p>
                                    ScaleX Digital Limited (herein referred to as , “ScaleX”, “us”, “we” or “our”) operates this website (“the Service”).
                                    We strive to maintain the highest standards of integrity in all our operations. Likewise, we are dedicated to protecting our customers’ and online visitors’ privacy on our service.
                                    
                                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                                    
                                    We use your data to provide and improve the Service. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Condition, accessible from here.
                                    We recognize that your privacy is important. This document outlines the types of personal information we receive and collect when you use the service, as well as some of the steps we take to safeguard information. We hope this will help you make an informed decision about sharing personal information with us.
                                
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
        
    )
}

export default PrivacyPolicy