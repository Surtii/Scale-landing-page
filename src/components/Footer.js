import React, { Fragment } from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

import Facebook from '../images/New/facebook.svg'
import Instagram from '../images/New/instagram.svg'
import Twitter from '../images/New/twitter.svg'
import LinkedIn from '../images/New/linkedin.svg'

const Footer = (props) => {
    return (
        <Fragment>
            <section className="scalex-action">
                <Container>
                    <Row  className="scalex-action__wrapper">
                        <Col md={6}>
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="scalex-action__wrapper--right">
                                        <h5>Start buying & selling cryptocurrencies now.</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="scalex-action__wrapper--left">
                                <a href="#get-started">
                                    <Button type="button" color="link" className="start-trading-white py-2 btn-lg">Start Trading</Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*<section className="scalex-quick-links">
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
    </section> */}
            <section className="scalex-footer">
                <Container>
                    
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>© 2021 Scalex All Rights Reserved</p>

                                <div className="scalex-footer--socials">
                                    <a href="https://www.instagram.com/scalexp2p/"><img src={Instagram} alt="Instagram"/></a>
                                    <a href="https://twitter.com/ScaleX_Africa"><img src={Twitter} alt="Twitter"/></a>
                                    <a href="#!"><img src={LinkedIn} alt="Linked"/></a>
                                    <a href="https://www.facebook.com/SURTiiTech"><img src={Facebook} alt="Facebook"/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default Footer
