import React from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import Accordion from '../../components/Accordion'


const KYC = ( ) => {


    return(
        <Layout>
            <Helmet>
                <title>KYC</title>
                <meta name="title" content="ScaleX - KYC"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            
            <section className="scalex-privacy-policy">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="scalex-privacy-policy--title">KYC</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <div className="scalex-privacy-policy__wrapper">
                                <h3>KYC POLICY</h3>
                    
                                <div className="scalex-accordion">
                                    <Accordion title="1.0 Definitions">
                                       <p><strong>1. Money Laundering (ML):</strong> means the process by which criminals attempt to conceal the origin and/or illegitimate ownership of property and assets that are the proceeds of criminal activities.</p>
                                       <p><strong>2. Terrorism Financing:</strong> includes both legitimate and illegitimate money characterized by concealment of the origin or intended criminal use of the funds.</p>
                                       <p><strong>3. Know Your Customer (KYC):</strong>  This entails obtaining and verifying customer identity, preservation of records of customers, mandatory disclosure of transactions to authorized statutory bodies.</p>
                                       <p><strong>4. Nigeria Financial Intelligence Unit (NFIU):</strong> The Nigerian arm of the global Financial Intelligence Unit (FIU).</p>
                                       <p><strong>5. Politically Exposed Persons (PEPs):</strong> Individuals who are or have been entrusted with prominent public functions in any country; generally presenting a higher risk for potential involvement in bribery and corruption by virtue of their position and the influence that they may hold.</p>
                                       <p><strong>6. Enterprise risk management (ERM):</strong> includes the methods and processes used by organizations to manage risks and seize opportunities related to the achievement of their objectives.</p>
                                       <p><strong>7. Client:</strong> includes any entity with a business relationship with the Company or any entity connected with a financial transaction which can pose a significant reputational or other risk to the Company</p>
                                    </Accordion>
                                    <Accordion title="2.0 Policy Mandate">
                                        <p>The Anti-ML & Combating the Financing of Terrorism Policy (“AML/CFT Policy”) sets out the guidelines for ScaleX Digital Limited (herein referred to as ‘the Company’) compliance with AML/CFT obligations under the law, as well as regulatory directives, and prevents any transaction that facilitates criminal activities.</p>
                                    </Accordion>
                                    <Accordion title="3.0 Policy Description">
                                        <p>ML and financing terrorism are financial crimes with economic effects. This policy is to eradicate the adverse effects of criminal economic activity and promote integrity and stability in financial markets. Compliance with this policy is also critical to preserving the Company’s corporate integrity, reputation and operational efficiency.</p>
                                        <p>The purpose of this Policy is: </p>
                                        <ul className="ml-4">
                                            <li>To guide the standard of conduct and practice that must be followed in the implementation of the KYC</li>
                                            <li>To protect the Company against fraud, reputational and other financial market risks</li>
                                            <li>To minimize the risks faced by the Company from proceeds of crime</li>
                                            <li>To prevent money laundering and to establish ERM systems to monitor the Company’s exposure to financial crime.</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="4.0 Compliance With Policy">
                                        <p>The Company shall comply with the following:</p>
                                        <ul className="ml-4">
                                            <li>Formulate and implement internal controls and other procedures that will deter criminals from using its facilities for money laundering and terrorist financing and to ensure that its obligations under Nigerian and subsisting laws and Regulations are met</li>
                                            <li>Embark on ERM and maintain an ERM register</li>
                                            <li>Designate an Officer with the relevant competence and independence to implement the Company’s AML/CFT compliance policy.</li>
                                            <li>Comply with the Money Laundering (Prohibition) Act, the Money Laundering (Prohibition) (Amendment) Act (together, the Money Laundering Act) and the Economic and Financial Crimes Commission Act.</li>
                                            <li>Identify and report any suspicious transactions derived from the criminal activities defined in AML/CFT Regulations</li>
                                            <li>Ensure the implementation of the requirements of the AML/CFT Act are not inhibited through the Company’s Confidentiality Agreement or Policy.</li>
                                            <li>Effectively communicate and raise staff awareness on AML/CFT issues</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="5.0 Know Your Client (KYC)">
                                        <p>KYC is the due diligence that the Company must perform to identify their clients and ascertain relevant information before carrying-out any financial businesses with them.</p>
                                        <p>The Company in upholding its KYC policies shall undertake the following: </p>
                                        <ul className="ml-4">
                                            <li>Issue a KYC compliance form to clients.</li>
                                            <li>Obtain the necessary documents and information from every client</li>
                                            <li>Report suspicious activities and transactions to the regulatory authorities</li>
                                            <li>Update client information as and when available</li>
                                            <li>Identify the client and verify the client’s identity using reliable, independent source documents (e.g. passport data page, national ID card, voters card, and utility bills stating their current post address. e.t.c), data or information </li>
                                            <li>Verify the legal status of business names, incorporated trustees and companies with the Corporate Affairs Commission</li>
                                            <li>Conduct due diligence for higher risk clients, business relationships or transactions including: PEP, cross border transactions and business relationships</li>                                            </ul>
                                    </Accordion>
                                    <Accordion title="6.0 Record Keeping And Reporting">
                                        <p>The Company shall keep the record of a customer’s identification for a period of at least five years after the closure of the account or the severance of relations with the customer; and </p>
                                        <p>Upon request by a regulatory or law enforcement agency, the Company shall make available records related to AML/CFT compliance or its clients as soon as possible from the date of the request.</p>
                                        <p>If the company notices any criminal transaction, it shall:</p>
                                        <ul className="ml-4">
                                            <li>Draw up a report on the identity of the principal and the beneficiary or beneficiaries;</li>
                                            <li>take appropriate action to prevent the laundering of the proceeds of criminal conduct;</li>
                                            <li>Report suspicious activities and transactions to the regulatory authorities</li>
                                                       
                                        </ul>
                                    </Accordion>
                                    <Accordion title="7.0 Politically Exposed Persons (PEPS)">
                                        <p>Business relationships with family members or close associates of PEPs involve reputation risks similar to those PEPs themselves. The Company shall evaluate the risks to its business operations when dealing with PEPs. </p>                                      
                                    </Accordion>
                                    <Accordion title="8.0 Sanctions">
                                        <p>A breach of the AML/CFT is a serious offence and could lead to investigations, imposition of fines and criminal sanctions (including imprisonment)</p>                                      
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

export default KYC