import React from 'react'
import {Link} from 'react-router-dom'

import { Container, Navbar, Nav, NavItem, Button, Row, Col, Card, } from 'reactstrap';

import Logo from '../../images/scale-logo-2-150x50.png'
import Phone from '../../images/New/scalex-phone.svg'
import NGNT from '../../images/New/ngnt.svg'
import ArrowUp from '../../images/New/arrow-up.svg'
import ArrowUpWhite from '../../images/New/arrow-up-white.svg'
import Bitcoin from '../../images/New/bitcoin.svg'
import Ethereum from '../../images/New/ethereum.svg'
import Doge from '../../images/doge-logo.png'
import Usdt from '../../images/New/usdt.svg'

const NavbarNew = () => {

    return (
        <section className="scalex-hero">
            <Navbar>
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <a href="https://t.me/scalexp2pbot" className="nav-link">
                                <Button color="link" className="start-trading">Start Trading</Button>
                            </a>
                        </NavItem>
                    </Nav>
   
                </Container>
            </Navbar>

            <div className="scalex-hero__hero-main">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="scalex-hero__hero-main__left ">
                                <h3 className="scalex-hero__hero-main__left--heading">Messenger</h3>
                                <h6 className="scalex-hero__hero-main__left--sub-heading">chatbot for P2P cryptocurrency exchange</h6>
                                <p className="scalex-hero__hero-main__left--paragraph">ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere. </p>
                                <a href="https://t.me/scalexp2pbot" >
                                    <Button color="link" className="start-trading">Start Trading</Button>
                                </a>
                            </div> 
                        </Col>
                        <Col md={6}>
                            <div className="scalex-hero__hero-main__right">
                                <div className="scalex-hero__hero-main__right__wrapper">
                                    <img src={Phone} alt="Phone" className="scalex-hero__hero-main__right__wrapper--phone-image" />
                                    <div className="scalex-hero__hero-main__right__wrapper__first-card">
                                        <Card className="scalex-hero__hero-main__right__wrapper__first-card--right-card">
                                            <div className="d-flex align-items-center">
                                                <span className="scalex-hero__hero-main__right__wrapper__first-card--coin-image">
                                                    <img src={NGNT} alt="coin" />
                                                </span>
                                                <div className="scalex-hero__hero-main__right__wrapper__first-card__values">
                                                   <div className="d-flex flex-column">
                                                    <p className="scalex-hero__hero-main__right__wrapper__first-card__values--naira">₦ 162, 207.14</p>
                                                    <p className="scalex-hero__hero-main__right__wrapper__first-card__values--dollar">$ 400</p>
                                                   </div>
                                                </div>
                                                <span className="scalex-hero__hero-main__right__wrapper__first-card__values--flow">
                                                    <img src={ArrowUp} alt="coin" className="scalex-hero__hero-main__right__wrapper--flow-image" /> 2.3%
                                                </span>
                                            </div>
                                        </Card>
                                    </div>
                                
                                    <div className="scalex-hero__hero-main__right__wrapper__second-cards">
                                        <div className="d-flex align-items-center">
                                            <Card className="scalex-hero__hero-main__right__wrapper__second-cards--1 mx-2">
                                                <div className="d-flex flex-column align-items-center">
                                                    <span className="coin-bg">
                                                        <img src={Bitcoin} alt="coin"/>
                                                    </span>
                                                    <h3>Bitcoin</h3>
                                                    <h5>₦ 162, 207.14</h5>
                                                    <h6>$ 400</h6>
                                                    <span className="scalex-hero__hero-main__right__wrapper__second-cards--flow text-white">
                                                        <img src={ArrowUpWhite} alt="coin" className="scalex-hero__hero-main__right__wrapper__second-cards--flow-image" /> 2.3%
                                                    </span>
                                                </div>
                                            </Card>
                                            <Card className="scalex-hero__hero-main__right__wrapper__second-cards--2 mx-2">
                                                <div className="d-flex flex-column align-items-center">
                                                    <span className="coin-bg">
                                                        <img src={Ethereum} alt="coin"/>
                                                    </span>
                                                    <h3>Ethereum</h3>
                                                    <h5>₦ 162, 207.14</h5>
                                                    <h6>$ 400</h6>
                                                    <span className="scalex-hero__hero-main__right__wrapper__second-cards--flow text-blue">
                                                        <img src={ArrowUp} alt="coin" className="scalex-hero__hero-main__right__wrapper__second-cards--flow-image" /> 2.3%
                                                    </span>
                                                </div>
                                            </Card>
                                            <Card className="scalex-hero__hero-main__right__wrapper__second-cards--3 mx-2">
                                                <div className="d-flex flex-column align-items-center">
                                                    <span className="coin-bg">
                                                        <img src={Doge} alt="coin"/>
                                                    </span>
                                                    <h3>Doge</h3>
                                                    <h5>₦ 162, 207.14</h5>
                                                    <h6>$ 400</h6>
                                                    <span className="scalex-hero__hero-main__right__wrapper__second-cards--flow text-white">
                                                        <img src={ArrowUp} alt="coin" className="scalex-hero__hero-main__right__wrapper__second-cards--flow-image" /> 2.3%
                                                    </span>
                                                </div>
                                            </Card>
                                        </div>
                                        
                                    </div>
                                
                                    <div className="scalex-hero__hero-main__right__wrapper__third-card">
                                        <Card className="scalex-hero__hero-main__right__wrapper__third-card--right-card">
                                            <div className="d-flex align-items-center">
                                                <span className="scalex-hero__hero-main__right__wrapper__third-card--coin-image">
                                                    <img src={Usdt} alt="coin" />
                                                </span>
                                                <div className="scalex-hero__hero-main__right__wrapper__third-card__values">
                                                   <div className="d-flex flex-column">
                                                    <p className="scalex-hero__hero-main__right__wrapper__third-card__values--naira">₦ 234, 207.14</p>
                                                    <p className="scalex-hero__hero-main__right__wrapper__third-card__values--dollar">$ 400</p>
                                                   </div>
                                                </div>
                                                <span className="scalex-hero__hero-main__right__wrapper__third-card__values--flow">
                                                    <img src={ArrowUp} alt="coin" className="scalex-hero__hero-main__right__wrapper--flow-image" /> 2.3%
                                                </span>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default NavbarNew
