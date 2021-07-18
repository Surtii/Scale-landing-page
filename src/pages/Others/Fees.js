import React, {useState} from 'react'
import { Helmet } from "react-helmet";
import classnames from 'classnames';
import { Container, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import SendReceiveFee from '../../components/Fees/SendReceiveFee';

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
                                                btc_bep_20="Dynamic"
                                                eth="Free"
                                                eth_bep_20="Free"
                                                ltc="Dynamic"
                                                bnb="Dynamic"
                                                busd="Free"
                                                ngnt="Dynamic"
                                                usdt_erc_20="Free"
                                                usdt_bep_20="Dynamic"
                                                usdt_trc_20="Free"
                                            />
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row className="fees-bg">
                                        <Col sm="12">
                                        <SendReceiveFee
                                            btc="Dynamic"
                                            btc_bep_20="Dynamic"
                                            eth="Free"
                                            eth_bep_20="Free"
                                            ltc="Dynamic"
                                            bnb="Dynamic"
                                            busd="Free"
                                            ngnt="Dynamic"
                                            usdt_erc_20="Free"
                                            usdt_bep_20="Dynamic"
                                            usdt_trc_20="Free"
                                        />
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row className="fees-bg">
                                        <Col sm="12">
                                            
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
