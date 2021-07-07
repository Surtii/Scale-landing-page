import React from 'react'
import { Container, Row, Col, Card, Button} from 'reactstrap'

import Hero from '../../components/New/Hero'
import Layout from '../../components/New/Layout'

import Ethereum from '../../images/New/ethereum.svg'
import Bitcoin from '../../images/New/bitcoin.svg'
import Sell from '../../images/New/sell.svg'
import Wallet from '../../images/New/wallet.svg'
import Withdraw from '../../images/New/withdraw.svg'
import ArrowGreen from '../../images/New/arrow-green.svg'
import ArrowRed from '../../images/New/arrow-red.svg'
import Charge from '../../images/New/charge.svg'
import World from '../../images/New/world.svg'
import Coins from '../../images/New/coins.svg'


const Home = () => {
    return (
        <Layout>
            <Hero/>
            <section className="scalex-section-two">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card className="scalex-section-two__card">
                                <p><img src={Ethereum} alt="Ethereum"/> Ethereum</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <h4>$400.74</h4>
                                        <h5>₦ 162, 207.14</h5>
                                    </span>
                                    <span>
                                        <h4><img src={ArrowGreen} alt="Ethereum" className="ml-2" /></h4>
                                        <h5 className="text-green">2.3%</h5>
                                    </span>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="scalex-section-two__card">
                                <p><img src={Ethereum} alt="Ethereum"/> Ethereum</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <h4>$400.74</h4>
                                        <h5>₦ 162, 207.14</h5>
                                    </span>
                                    <span>
                                        <h4><img src={ArrowRed} alt="Arrow" className="ml-2"/></h4>
                                        <h5 className="text-red">2.3%</h5>
                                    </span>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="scalex-section-two__card">
                                <p><img src={Ethereum} alt="Ethereum"/> Ethereum</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <h4>$400.74</h4>
                                        <h5 >₦ 162, 207.14</h5>
                                    </span>
                                    <span>
                                        <h4><img src={ArrowRed} alt="Arrow" className="ml-2" /></h4>
                                        <h5 className="text-green">2.3%</h5>
                                    </span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="scalex-section-three">
                <Container>
                    <Row className="scalex-section-three--no-app">
                        <Col md={6}>
                            <h4 >You need not<br/> Download <span>another App</span></h4>
                        </Col>
                        <Col md={6}>
                            <p>ScaleX Chatbot is a fast-rising P2P solution offering easy and secure crypto exchange at your fingertips. (accessible on your telegram)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card className="scalex-section-three__card">
                                <div className="d-flex flex-column">
                                    <h3>01</h3>
                                    <h4><span>Security First,</span><br/> Always.</h4>
                                    <p>
                                        ScaleX’s primary goal is to ensure transactions are done 
                                        with ease in a secure environment protected by an Escrow. 
                                        This was further enhanced by building our infrastructure on 
                                        the blockchain.
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
                                        To use ScaleX means you do not have to be familiar with strangers
                                        before earning their trust. Trust is what ScaleX is built upon, ensuring 
                                        peace of mind as you focus on scaling your crypto business
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="scalex-section-three__card">
                                <div className="d-flex flex-column">
                                    <h3>03</h3>
                                    <h4><span>Speed</span> is Important<br/> to scale.</h4>
                                    <p>
                                        ScaleX is dedicated to helping you scale as a crypto exchanger; 
                                        this is why we have built a system that speeds up transaction processes 
                                        through our seamless and interactive bot interface.
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
                                <h2>Telegram Escrow Bot for Faster Transactions.</h2>
                                <p className="py-2">
                                    Telegram is fast becoming a go-to marketplace for cryptocurrency exchanges.
                                    As such, ScaleX Chatbot is modelled around your day-to-day conversations during 
                                    a P2P crypto transaction on Telegram and other messenger platforms.
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
                                <h3>Fastest Rising Crypto Escrow Bot</h3>
                                <p className="scalex-section-five__wrapper--paragraph">ScaleX is the first of its kind. A P2P chatbot that helps bring balance to the imbalances in the cryptocurrency P2P ecosystem</p>
                                <div className="scalex-section-five__wrapper__card">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Card>
                                            <h5 className="text-blue">8K</h5>
                                            <p>Transactions</p>
                                        </Card>
                                        <Card>
                                            <h5 className="text-green">350</h5>
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
                                <h3>Invest in the best coins ever</h3>
                                <p>
                                    Telegram is fast becoming a go-to marketplace for cryptocurrency 
                                    exchanges. As such, ScaleX Chatbot is modelled around your day-to-day
                                    conversations during a P2P crypto transaction on Telegram and other messenger platforms.
                                </p>
                                <a href="https://t.me/scalexp2pbot" >
                                    <Button color="link" className="start-trading">Start Trading</Button>
                                </a>
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
