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
                                <p>Scalex Digital Limited (herein referred to as , “ScaleX”, “us”, “we” or “our”) operates this website (“the Service”).</p>
                                <p>We strive to maintain the highest standards of integrity in all our operations. Likewise, we are dedicated to protecting our customers’ and online visitors’ privacy on our service.</p>
                                    
                                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

                                <p>We use your data to provide and improve the Service. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Condition, accessible from here.</p>
                                 <p>   We recognize that your privacy is important. This document outlines the types of personal information we receive and collect when you use the service, as well as some of the steps we take to safeguard information. 
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
                                        <span> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. </span><br/><br/>
                                        <span>
                                            Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyse our Service.
                                        </span><br/><br/>
                                        <span>
                                            You can instruct your browser to accept or refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to experience and use some portions of our Service. 
                                        </span><br/><br/>
                                    </Accordion>
                                    <Accordion title="2.4 Examples of Cookies we use:">
                                        <ul className="ml-4">
                                            <li> Session Cookies. We use Session Cookies to operate our Service.</li>
                                            <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                                            <li>Security Cookies. We use Security Cookies for security purposes.</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="3.0 Use of Data">
                                       <p>We may also collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p> 
                                       <ul className="ml-4">
                                            <li>To provide and maintain the Service</li>
                                            <li>To notify you about changes to our Service</li>
                                            <li>To open and maintain an account for you</li>
                                            <li>To provide customer care and support</li>
                                            <li>To provide analysis or valuable information so that we can improve the Service</li>
                                            <li>To monitor the usage of the Service</li>
                                            <li>To detect, prevent and address technical issues</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="4.0 Transfer of Data">
                                       <p>Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                                       <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                                       <p>ScaleX will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy. Any personal information you provide to us including and similar to your name, address, telephone number and e-mail address will not be released, sold, or rented to any entities or individuals except as noted below.</p>
                                    </Accordion>
                                    <Accordion title="5.0 Legal Requirement">
                                       <p>ScaleX may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                                       <ul className="ml-4">
                                            <li>To comply with a legal obligation</li>
                                            <li>To protect and defend the rights or property of Scalex</li>
                                            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                                            <li>To protect the personal safety of users of the Service or the public </li>
                                            <li>To protect against legal liability</li>

                                        </ul>
                                    </Accordion>
                                    <Accordion title="6.0 Service Providers">
                                       <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide service on our behalf, to perform Service-related services or to assist us in analysing how our Service is used.</p>
                                       <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                                    </Accordion>
                                    <Accordion title="7.0 External Sites">
                                       <p>Our Service may contain links to other sites not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                                       <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                                    </Accordion>
                                    <Accordion title="8.0 Children's Privacy">
                                        <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                                        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                                    </Accordion>
                                    <Accordion title="9.0 Changes To This Privacy Policy">
                                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                                        <p>We will let you know via email and/or by a notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                                        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                                    </Accordion>
                                    <Accordion title="10.0 Clients’ Liability">
                                        <p>The security of your data is important to us. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure.</p>
                                        <p>While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to us and you are solely responsible for maintaining the secrecy of any passwords or other account information.</p>
                                        <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
                                    </Accordion>
                                    <Accordion title="11.0 Contact Us">
                                        <p>If you have any questions about this Privacy Policy, please contact us by visiting our contact us page.</p>
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