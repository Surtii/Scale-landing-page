import React, {useState} from 'react'
import { Helmet } from "react-helmet";
import classnames from 'classnames';
import { Container, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import SendReceiveFee from '../../components/Fees/SendReceiveFee';
import TradeFee from '../../components/Fees/TradeFee';

const Fees = () => {
    const [activeTab, setActiveTab] = useState('1')

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Layout>
            <Helmet>
                <title>Fees</title>
                <meta name="title" content="ScaleX - Fees"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            <section className="scalex-fees">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="scalex-fees--title">Fees</h3>
                            <Nav tabs className="justify-content-between scalex-fees--tab">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Send Fee
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Receive Fee
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Trade Fee
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} >
                                <TabPane tabId="1">
                                    <Row className="fees-bg">
                                        <Col sm="12">
                                            <SendReceiveFee
                                                btc="Dynamic"
                                                btc_bep_20="0.00016 BTC"
                                                eth="Dynamic"
                                                eth_bep_20="0.0027 ETH"
                                                ltc="0.015 LTC"
                                                bnb="0.01 BNB"
                                                busd="$5"
                                                ngnt="Dynamic"
                                                usdt_erc_20="Dynamic"
                                                usdt_bep_20="$10"
                                                usdt_trc_20="$10"
                                            />
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row className="fees-bg">
                                        <Col sm="12">
                                            <SendReceiveFee
                                                btc="Free"
                                                btc_bep_20="Free"
                                                eth="Free"
                                                eth_bep_20="Free"
                                                ltc="Free"
                                                bnb="Free"
                                                busd="Free"
                                                ngnt="Free"
                                                usdt_erc_20="Free"
                                                usdt_bep_20="Free"
                                                usdt_trc_20="Free"
                                            />
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row className="fees-bg">
                                        <Col sm="12">
                                            <TradeFee/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>   
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Fees
