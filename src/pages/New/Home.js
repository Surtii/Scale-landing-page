import React from 'react'
import { Container, Row, Col, Card} from 'reactstrap'

import Hero from '../../components/New/Hero'
import Layout from '../../components/New/Layout'

import Ethereum from '../../images/New/ethereum.svg'
import ArrowGreen from '../../images/New/arrow-green.svg'
import ArrowRed from '../../images/New/arrow-red.svg'

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
        </Layout>
    )
}

export default Home
