import React, {useState} from 'react'
import { Container, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import { Helmet } from "react-helmet";
import classnames from 'classnames';


import Layout from '../../components/New/Layout'
import NavbarComponent from '../../components/New/NavbarComponent';
import SellOrder from '../../components/New/SellOrder';

const Order = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Layout>
            <Helmet>
                <title>Offers</title>
                <meta name="title" content="ScaleX - Offers"/>
                <meta name="description" content="ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>

            <section className="scalex-order">
                <Container>
                    <Row>
                        <Col>
                            <Nav tabs className="justify-content-between">
                                <span className="scalex-order--text">Orders</span>
                                <span className="d-flex scalex-order--tab">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Buy Now
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Sell Now
                                        </NavLink>
                                    </NavItem>
                                </span>
                            </Nav>
                            <TabContent activeTab={activeTab} >
                                <TabPane tabId="1">
                                    <Row className="order-bg">
                                        <Col sm="12">
                                           
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                <Row className="order-bg">
                                    <Col sm="12">
                                        <SellOrder/>
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

export default Order
