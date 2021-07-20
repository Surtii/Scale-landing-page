import React from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import Accordion from '../../components/Accordion'


const Terms = ( ) => {

    const accordionData = [
        {
          title: '1.  Age Restriction',
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
          title: '2 Changes to these terms',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: '3 Using this service',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];


    return(
        <Layout>
            <Helmet>
                <title>Terms and Conditions</title>
                <meta name="title" content="ScaleX - Terms and Conditions"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            
            <section className="scalex-privacy-policy">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="scalex-privacy-policy--title">Terms and Conditions</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <div className="scalex-privacy-policy__wrapper">
                                <h3>Introduction</h3>
                                <p>
                                    Welcome to ScaleX Digital Limited (herein referred to as “we”, “us”, “our”, “Scalex”) and thank you for choosing this service, website or software application or Application Programming Interface (API) (together referred to as the “Service”).
                                    By using our service, you are agreeing to these terms and are bound by same. Kindly read through the terms carefully. If you don’t agree with these Terms, don’t use the Service.
                                    
                                    The following Terms of Use as stated below include our Privacy Policy (include link) (together referred to as “The Terms”) apply to any person that enrolls for and/or opens an Account through Scalex.africa or any associated service, software, API, or participates in limited offers.
                                    
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

export default Terms