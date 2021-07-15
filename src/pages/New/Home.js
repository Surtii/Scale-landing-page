import React from 'react'
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button} from 'reactstrap'
import OwlCarousel from 'react-owl-carousel'; 

import { options} from '../../utils/carousel'
import AllPrices from '../../components/AllPrices'


import Hero from '../../components/New/Hero'
import Layout from '../../components/New/Layout'

import Bitcoin from '../../images/New/bitcoin.svg'
import Sell from '../../images/New/sell.svg'
import Wallet from '../../images/New/wallet.svg'
import Withdraw from '../../images/New/withdraw.svg'
import Charge from '../../images/New/charge.svg'
import World from '../../images/New/world.svg'
import Coins from '../../images/New/coins.svg'


const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Scalex - A fraud-proof P2P cryptocurrency exchange</title>
                <meta name="title" content="Scalex - A fraud-proof P2P cryptocurrency exchange"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <Hero/>
            <section className="scalex-section-two">
                <Container>
                    <Row>
                        <OwlCarousel  
                        { ...options}
                        >  
                            <AllPrices/>
                        </OwlCarousel> 
                        </Row>
                </Container>
            </section>
            <section className="scalex-section-three">
                <Container>
                    <Row className="scalex-section-three__no-app">
                        <Col md={6}>
                            <h4 >An interactive <span>Chatbot</span> <br/>to support your Trading</h4>
                        </Col>
                        <Col md={6}>
                            <div className="scalex-section-three__right-button">
                                <a href="https://t.me/scalexp2pbot" >
                                    <Button color="link" className="start-trading">Chat Now</Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card className="scalex-section-three__card">
                                <div className="d-flex flex-column">
                                    <h3>01</h3>
                                    <h4><span>Security First,</span><br/> Always.</h4>
                                    <p>
                                        The primary goal of Scalex is to ensure transactions
                                        are done with ease in a secure environment protected 
                                        by a smart escrow infrastructure.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="scalex-section-three__card">
                                <div className="d-flex flex-column">
                                    <h3>02</h3>
                                    <h4><span>Trust</span> is a Strong<br/> Commodity.</h4>
                                    <p>
                                        With Scalex, you do not have to be familiar with strangers 
                                        before earning their trust. Trust is what Scalex is built upon, 
                                        ensuring peace of mind as you focus on scaling your crypto business
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="scalex-section-three__card">
                                <div className="d-flex flex-column">
                                    <h3>03</h3>
                                    <h4><span>Flexibility</span> is Important<br/> to scale.</h4>
                                    <p>
                                        Scalex is dedicated to helping you buy and sell with ease, 
                                        our unique infrastructure supports tokens across major networks; 
                                        ERC-20, TRON, BSC, OMNI, DOGE, and LTC
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="scalex-section-four">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="scalex-section-four__left">
                                <h2>Earn as much as 10% commission by referring your friends</h2>
                                <p className="py-2">
                                    With Scalex you can earn BTC, ETH, BNB and much more every time someone 
                                    you referred concludes a crypto purchase
                                 </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="scalex-section-four__right">
                                <img src={Charge} alt="charge" className="scalex-section-four__right--charge-image" /> 

                                <Card className="scalex-section-four__right__card">
                                    <div className="d-flex align-items-center">
                                        <span className="scalex-section-four__right__card--one" >
                                            <div className="scalex-section-four__right__card__image-wrapper">
                                                <img src={Bitcoin} alt="charge" className="scalex-section-four__right__card__image-wrapper--image" /> 
                                            </div>
                                            <p>Buy Coin</p>
                                        </span>
                                        <span className="scalex-section-four__right__card--two">
                                            <div className="scalex-section-four__right__card__image-wrapper">
                                                <img src={Sell} alt="charge" className="scalex-section-four__right__card__image-wrapper--image" /> 
                                            </div>
                                            <p>Sell Coin</p>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="scalex-section-four__right__card--three">
                                            <div className="scalex-section-four__right__card__image-wrapper">
                                                <img src={Withdraw} alt="charge" className="scalex-section-four__right__card__image-wrapper--image" /> 
                                            </div>
                                            <p>Withdraw</p>
                                        </span>
                                        <span className="scalex-section-four__right__card--four">
                                            <div className="scalex-section-four__right__card__image-wrapper">
                                                <img src={Wallet} alt="charge" className="scalex-section-four__right__card__image-wrapper--image" /> 
                                            </div>
                                            <p>Wallet</p>
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="scalex-section-five">
                <Container>
                    <Row>
                        <Col>
                            <div className="scalex-section-five__wrapper">
                                <h3>A P2P platform for the Global Market</h3>
                                <p className="scalex-section-five__wrapper--paragraph">Scalex is the first of its kind. A peer-to-peer platform built to bring balance to the imbalances in the crypto ecosystem</p>
                                <div className="scalex-section-five__wrapper__card">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Card>
                                            <h5 className="text-blue">350K</h5>
                                            <p>Transactions</p>
                                        </Card>
                                        <Card>
                                            <h5 className="text-green">57K</h5>
                                            <p className="mx-4">Users    </p>
                                        </Card>
                                        <Card>
                                            <h5 className="text-red-2">11</h5>
                                            <p className="mx-4">Coins   </p>
                                        </Card>
                                    </div>
                                </div>
                                <div className="scalex-section-five__wrapper--image">
                                    <img src={World} alt="World" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="scalex-section-six">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="scalex-section-six__left">
                                <h3>Trade trending tokens & stablecoins</h3>
                                <p>
                                    Scalex enables our users to trade in globally recognized
                                    tokens and stablecoins such as Bitcoin, Ethereum, Litecoin, 
                                    Dogecoin, USDT, BUSD and USDC.
                                </p>
                                
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="scalex-section-six__right">
                            <img src={Coins} alt="Coins" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Home
