import React, {useState} from 'react'
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button, Form, FormGroup, Input, Spinner} from 'reactstrap'
import OwlCarousel from 'react-owl-carousel'; 
import axios from 'axios'

import { options} from '../utils/carousel'
import AllPrices from '../components/AllPrices'


import Hero from '../components/Hero'
import Layout from '../components/Layout'

import Bitcoin from '../images/New/bitcoin.svg'
import Sell from '../images/New/sell.svg'
import Wallet from '../images/New/wallet.svg'
import Withdraw from '../images/New/withdraw.svg'
import Charge from '../images/New/charge.svg'
import World from '../images/New/world.svg'
import Coins from '../images/New/coins.svg'
import Phone from '../images/New/phone-shot.svg'


const initialState = {
    email : '',
}

const Home = () => {
    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')

    const { email} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]:value })
    }

    const SubmitForm = async (formData) => {

        const config = {
            headers: {
                's-signature': process.env.REACT_APP_API_SECRET,
                'Content-Type': 'application/json'
            }
          }
          
        try {
            const res = await axios.post('https://surtii.com/w/api/v1/subscribers/add', formData, config)
            const data = res.data.message
            setLoading(true)
            setMessage(data)
            setFormData(initialState)
        } catch (err) {
            setMessage(err.response.data.message)
        }
        
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(false)
        SubmitForm(formData)
    }

    return (
        <Layout>
            <Helmet>
                <title>Scalex - Buy and sell cryptocurrency in the Most Secure P2P exchange</title>
                <meta name="title" content="Scalex - Buy and sell cryptocurrency in the Most Secure P2P exchange"/>
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
                                <a href="#get-started" >
                                    <Button type="button" color="link" className="start-trading">Chat Now</Button>
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


            <section className="scalex-section-seven" id="get-started">
                <Container>
                    <Row>
                        <Col md={6} className="order-1">
                            <div className="scalex-section-seven__left">
                            <img src={Phone} alt="Phone screenshot" />
                            </div>
                        </Col>
                        <Col md={6} className="order-2">
                            <div className="scalex-section-seven__right">
                                <h3>Are you ready to <b>Scale</b> your crypto trade with Scalex?</h3>
                                <p>
                                    Get early access now.
                                </p>
                                <Form onSubmit={handleSubmit}>
                                    <Row form>
                                        <Col md={8}>
                                            <FormGroup>
                                                <Input 
                                                    type="email" 
                                                    name="email" 
                                                    value={email} 
                                                    placeholder="Email"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </FormGroup>
                                            <Button type='submit' className="scalex-section-seven__right--button mr-2">Get started</Button>
                                            {!loading ? <Spinner size="sm" /> : null}
                                            {message ? <p className="pt-2"> {message}</p>  :  null }
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
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
