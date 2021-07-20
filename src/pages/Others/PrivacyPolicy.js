import React  from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import Accordion from '../../components/Accordion'



const PrivacyPolicy = ( ) => {


    return(
        <Layout>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="title" content="ScaleX - Privacy Policy"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            
            <section className="scalex-privacy-policy">
                <Container>
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
                                    We recognize that your privacy is important. This document outlines the types of personal information we receive and collect when you use the service, as well as some of the steps we take to safeguard information. 
                                    We hope this will help you make an informed decision about sharing personal information with us.
                                </p>

                                <div className="scalex-accordion">
                                    <Accordion title="1.0 Information collection and use">
                                        We collect different types of information from the visitors to our website voluntarily. The collection of the information is to provide and improve our service to you and such information includes but is not limited to:<br/>
                                        Email address <br/>
                                        First name and last name <br/>
                                        Phone number <br/>
                                        Address, State, Province, ZIP/Postal code, City <br/>
                                        Cookies and Usage Data.<br/>
                                        This information is collected when you request information from us, when you provide it to us, when we obtain same from third parties, when we open and operate an account for you and when you sign up to join our mailing list. The information collected is internally reviewed, used to improve the content of our website, notify our visitors of updates, and respond to visitor inquiries.<br/>
                                        Once information is reviewed, it is discarded or stored in our files. If we make material changes in the collection of personally identifiable information we will inform you by placing a notice on our site. Personal information received from any visitor will be used only for internal purposes and will not be sold or provided to third parties.
                                    </Accordion>
                                    <Accordion title="2.0 Types of Data Collected">
                                    </Accordion>
                                    <Accordion title="2.1 Personal Data">
                                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”).
                                    </Accordion>
                                    <Accordion title="2.2 Usage Data">
                                        We may also collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                                    </Accordion>
                                    <Accordion title="2.3 Tracking & Cookies Data">
                                       
                                        <span className="my-2"> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. </span><br/>
                                        <span className="my-2">
                                            Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyse our Service.
                                        </span><br/>
                                        <span className="my-2">
                                            You can instruct your browser to accept or refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to experience and use some portions of our Service. 
                                        </span><br/>
                                    </Accordion>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
        
    )
}

export default PrivacyPolicy