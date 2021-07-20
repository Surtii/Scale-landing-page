import React from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import Accordion from '../../components/Accordion'


const PrivacyPolicy = ( ) => {

    const accordionData = [
        {
          title: '1.0 Information collection and use',
          content: `We collect different types of information from the visitors to our website voluntarily. The collection of the information is to provide and improve our service to you and such information includes but is not limited to:
            Email address,
            First name and last name,
            Phone number,
            Address, State, Province, ZIP/Postal code, City
            Cookies and Usage Data.
            This information is collected when you request information from us, when you provide it to us, when we obtain same from third parties, when we open and operate an account for you and when you sign up to join our mailing list. The information collected is internally reviewed, used to improve the content of our website, notify our visitors of updates, and respond to visitor inquiries.
            Once information is reviewed, it is discarded or stored in our files. If we make material changes in the collection of personally identifiable information we will inform you by placing a notice on our site. Personal information received from any visitor will be used only for internal purposes and will not be sold or provided to third parties.
            .`
        },
        {
          title: 'Section 2',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Section 3',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];


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
                                    {
                                        accordionData.map(({ title, content }) => (
                                           <>
                                            <hr/>
                                            <Accordion title={title} content={content} />
                                           </>
                                        ))
                                    }
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