import React from 'react'
import { Helmet } from "react-helmet";
import { Col, Container, Row } from 'reactstrap';

import Layout from '../../components/Layout'
import NavbarComponent from '../../components/NavbarComponent';
import Accordion from '../../components/Accordion'


const Terms = ( ) => {


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
                                <p>Welcome to Scalex Digital Limited (herein referred to as “we”, “us”, “our”, “Scalex”) and thank you for choosing this service, website or software application or Application Programming Interface (API) (together referred to as the “Service”).</p>
                                <p>By using our service, you are agreeing to these terms and are bound by same. Kindly read through the terms carefully. If you don’t agree with these Terms, don’t use the Service.</p>
                                <p>The following Terms of Use as stated below include our Privacy Policy (include link) (together referred to as “The Terms”) apply to any person that enrolls for and/or opens an Account through Scalex.africa or any associated service, software, API, or participates in limited offers.</p>

                                <div className="scalex-accordion">
                                    <Accordion title="1.0 Age Restriction">
                                        <p>Our Service does not address anyone under the age of 18 (“Children”).</p>
                                        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                                    </Accordion>
                                    <Accordion title="2.0 Changes To These Terms">
                                        <p>We may update our terms from time to time.</p>
                                        <p>We reserve the right and sole discretion, to make changes to these terms, at any time. It is your responsibility to check this service periodically for changes. Your continued use of our service following the effect of any change means that you have accepted and agreed to the changes.</p>
                                        <p>You are advised to review these terms periodically for any changes. Changes to these terms are effective when they are uploaded to our service.</p>
                                        <p>As you use our services, we will send you newsletters, service announcements and other relevant information. You may wish to unsubscribe from our mailing list.</p>
                                    </Accordion>
                                    <Accordion title="3.0 Using This Service">
                                        <p>Using this service includes but is not limited to providing information, engaging in digital currency transactions including buying and selling of supported digital currency, making submissions and participating in offers. You undertake to use this service only as permitted by law.</p>
                                        <p>You agree not to undertake the following:</p>
                                        <span>1. Reuse, exploit, and misuse any portion of this service.</span><br/>
                                        <span>2. Make any alterations which will and have interfered with the service or any content displayed on some other than the interface provided.</span><br/>
                                        <span>3. Use the service with the intention to damage the server and impair the use of the service by other users.</span><br/>
                                        <span>4. Use your Account to carry out transactions on behalf of a third party or open an account using the name and details of a third party.</span><br/>
                                        <span>5. Obtain unauthorized access to a third party’s account or the Scalex database.</span><br/>
                                        <span>6. Illegal and prohibited activity as stated in the criminal code of Nigeria and in violation of any law, statute or precedent in Nigeria.</span><br/>
                                    </Accordion>
                                    <Accordion title="4.0 Third Party Sites">
                                        <p>Our Service may contain links to other sites not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                                        <p>We do not guarantee the identity of any user, or third party.</p>
                                    </Accordion>
                                    <Accordion title="5.0 Account And Access">
                                        <p>To use our service, you are required to open and create your own personalized Account. You confirm that all information provided is to open the account is accurate and you agree to update your information once a change occurs. You will provide security for transactions carried out through your Account by ensuring there is sufficient local or digital currency in your account or at least the minimum closing amount.</p>
                                        <p> <strong>5.1</strong> In furtherance of our Anti-Money Laundering & Combating the Financing of Terrorism (AML/CFT) Policy, you agree to provide us with requisite information by filling out the Know Your Client (KYC form) which can be found at (insert link). Once the verification procedure has been completed and KYC form has been filled out, you will be granted access to our Service. Kindly visit (insert link) for more information on our AML/CFT policy.</p>
                                        <p>The required information will include but is not limited to the following: name, address, telephone number, e-mail address, date of birth, tax identification number (TIN), valid identification card number, and bank account information (such as the name of the bank, the account type, sort code number, and account number).</p>
                                        <p> <strong>5.2</strong> We may be required to submit additional information on you, your business, provide records to regulators or require you to meet with our staff in certain circumstances. This process is enhanced due diligence (“EDD”). We reserve the right to charge you for the EDD and we will notify you of the same where appropriate.</p>
                                        <p>While we verify your identity and carry out the EDD, you agree that there may be delays in accessing your account and carrying out transactions. Once the process is complete, your account will run seamlessly.</p>
                                        <p> <strong>5.3</strong> As part of the Identity Verification and EDD procedures, we are required to retain certain information even after we have closed and suspended your account or you have terminated account. See our privacy and AML/CFT policy for more information.</p>
                                        <p>To protect your Account which comprises of your wallet amongst others, keep your password and pin confidential and secure. You are responsible for any and all activity carried out using our service. Proceeds realized from the sale of your supported digital currency(s) will be credited to your e-Wallet, less any applicable fees and taxes and interest will not be paid on supported digital currency held in your e-wallet.</p>
                                    </Accordion>
                                    <Accordion title="6.0 E-Wallet">
                                        <p>Your account includes the use of an e-wallet. The e-wallet enables you to do the following through our services:</p>
                                        <ul className="ml-4">
                                            <li>Load and monitor electronic money (“e-money”) using the supported digital currencies available on our service.</li>
                                            <li>This is by: using one of the payment methods available on the service (credit or debit card, or bank transfer). Your e-wallet will show reflect the funds once we have received them. Once you have loaded funds into your e-wallet, you can purchase any Scalex supported digital currency.</li>
                                            <li>Send and receive e-money.</li>
                                            <li>Monitor the currency exchange rates to track prices of the digital currencies for purchase or sale.</li>
                                        </ul>
                                        <p>You can receive supported digital currency into your e-wallet by providing the sender with a receive address generated in your e-wallet. Your e-wallet will only be credited with Supported Digital Currency sent to a receive address generated through your e-Wallet and associated with that Supported Digital Currency.</p>
                                        <p>If any local or digital currency has been credited to your e-wallet in error, you must immediately notify ScaleX of the error by email or filling the complaints form. You have no claim to any Local Currency or digital currency received into your account in error. Such funds must be returned in accordance with the instructions provided here (insert link).</p>
                                        <p>Please note that the e-wallet is not a deposit account. However, Scalex will hold funds received in a designated safekeeping account with a reputable financial institution. E-money held in an e-wallet will not earn any interest.</p>
                                        <p><strong>6.1</strong> The Supported Digital Currencies by ScaleX may change from time to time. All transactions must be carried out using the digital currencies supported by ScaleX.</p>
                                        <p>We retain the right to suspend the provision of our services to you:</p>
                                        <span>1. If you do not comply with our terms, policies or if we discover and are investigating suspected misconduct.</span><br/>
                                        <span>2. If you receive any digital currency that digital currency is not a ScaleX supported Digital Currency</span><br/>
                                        <span>3. If the digital currency is sent to a receive address associated with your e-wallet, where that receive address is associated with another digital currency.</span><br/>
                                        <p></p>
                                        <p><strong>6.2</strong> All e-wallet transactions will be processed according to the preference set by you when you set up your account. You may purchase the Scalex supported Digital Currency by using e-Money loaded to your e-wallet.</p>
                                        <p>By using our service, you authorize us to debit e-money from your e-wallet. Although we will attempt to deliver the digital currency to you as soon as possible, e-money may be debited from your e-wallet before digital currency is delivered to your e-wallet.</p>
                                        <p>You may sell the digital currency in exchange for e-money. You authorize us to debit your Digital Currency Wallet and credit your E-Money Wallet with the relevant amount of E-Money.</p>
                                        <p><strong>6.3</strong> You will view your e-wallet balance and your transaction history using the dashboard service which will show the key account information including: amount and currency of each purchase, reference to identify the payer or payee, breakdown of fees charged, the rate of exchange, amount after exchange where you are the payer or the amount before the exchange where you are the payee, and the debit or credit date of each Purchase.</p>
                                    </Accordion>
                                    <Accordion title="7.0 Applicable Risks">
                                        <p>Please note the risks involved in trading or holding digital currencies can be substantial. Digital Currency Services are not currently regulated by the Central Bank of Nigeria or any other regulator. Therefore carefully consider whether trading or holding Digital Currencies is suitable for your risk appetite.</p>
                                        <p>You are solely responsible for the decision to use our service to deal with our supported digital currency and accept the risk that underlying software protocols relating to the supported digital currency you store in your Digital Currency Wallet may change.</p>
                                    </Accordion>
                                    <Accordion title="8.0 Notice">
                                        <p>You accept that:</p>
                                        <ul className="ml-4">
                                            <li>Any notices relating to your account or your use of our service will be provided on the service or by mailing them to the email address provided by you. You consent to receiving all notices electronically; </li>
                                            <li>You have available the hardware and software to access, receive and save notices sent to you electronically.</li>
                                            <li>All information provided to us is valid and up to date.</li>
                                            <li>Any notification sent to the email address provided by you will be deemed received at the time it was sent.</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="9.0 Loading & Withdrawal">
                                        <p>Once you have completed all the account opening requirements, we will provide on our service details of the bank account into which you must make the Deposit. The bank account provided is operated solely by Scalex.</p>
                                        <p>When the amount loaded is reflected in the account provided, your Deposit will reflect in your e-wallet.</p>
                                        <p>Note that we do not accept cash and cheques. The acceptance of cash or cheque is exceptional cases and each case will be considered on the merits. We reserve the right to determine what cases are exceptional.</p>
                                        <p><strong>9.1</strong> You may withdraw funds from your e-wallet once you have uploaded your bank account details into your profile. We will process your withdrawals as instructed by you. Digital currency transactions cannot be reversed once they have been sent to the relevant digital network.</p>
                                        <p>Therefore, you solely responsible to ensure all instruction and information provided to us with respect to all transactions are accurate.</p>
                                        <p>Deposit and withdrawals are carried out only on business days and but you agree that we have not provided any guarantee in relation to the deposit and withdrawal processing period.</p>
                                        <p>We reserve the right to refuse any buy or sell transaction if we suspect that such action is in furtherance of an illegal and fraudulent activity or that such action will expose Scalex to risk. We shall not be liable for any delay or non-completion of a buy or sell transaction.</p>
                                    </Accordion>
                                    <Accordion title="10.0 Account Security">
                                        <p>We shall not be liable for any damage or malfunctions caused by viruses, spyware, or other malware that may affect your device or other equipment. We strongly advise the use of a reputable virus screening and prevention software which is to be updated regularly to combat such viruses.</p>
                                        <p>Please note the following:</p>
                                        <ul className="ml-4">
                                            <li>SMS and email services are vulnerable and care should be taken when reviewing messages purporting to originate from us.</li>
                                            <li>We will never seek access to your device or account.</li>
                                            <li>We will not request for your personal identification number (PIN) or other identification code associated with you account.</li>
                                            <li>Verify the uncertainty and authenticity of any notice of any purported to be made by ScaleX to your account.</li>
                                        </ul>
                                        <p>You are to take steps to adequately secure your account details. We shall not be liable for failure to secure your account details which results in the unauthorized access to your Account and/or results in the tampering of local or digital currency kept in your e-wallet or any linked bank account(s).</p>
                                        <p>You accept that you shall be held responsible for all activities that occur through your account and accept all risks thereof.</p>
                                    </Accordion>
                                    <Accordion title="11.0 Termination">
                                        <p>If you have any questions about this Privacy Policy, please contact us by visiting our contact us page.</p>
                                        <p>ScaleX may carry out the following:</p>
                                        <span>1. Cancel or reverse a transaction authorized by you</span><br/>
                                        <span>2. Suspend and/or terminate your access to any of our Services</span><br/>
                                        <span>3. Deactivate your Account with immediate effect for any reason, where:</span><br/>
                                        <ul className="ml-5">
                                            <li>We reasonably believe we are required to do so by applicable law.</li>
                                            <li>We reasonably suspect you of acting in breach of these terms</li>
                                            <li>We suspect that you have provided, false information or refuse to provide information we require for Identity Verification and/or EDD </li>
                                            <li>We suspect you have breached our AML/CFT Policy</li>
                                            <li>We reasonably have concerns that a transaction is erroneous or on the security of your Account or we suspect our Service is being used in a fraudulent way</li>
                                            <li>Your credit or debit card or any other valid payment method linked to your e-wallet is declined</li>
                                            <li>Your account is subject to pending litigation, investigation or we foresee a risk of legal non-compliance associated with your Account activity</li>
                                            <li>You take any action that may knowingly or unknowingly circumvent the control of our services.</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="12.0 Suspension And Closure Of Account">
                                        <p>We may suspend your Account by notifying you of our actions and reasons for suspension or closure. Where applicable, we will provide you with the procedure for compliance to correct any errors that led to the suspension.</p>
                                        <p>If the procedure stated is adhered to, we will lift the suspension. However once the suspension has been lifted, you agree that the transaction may be reinstated at another price or other terms.</p>
                                        <p><strong>12.1 </strong> We may close or deactivate your access to any or all of our Services without reason by a two weeks’ notice. You accept and agree that we do not have to state the reason for our decision to suspend, deactivate or close your Account, and we shall have no liability to you with respect to the suspension or closure of your Account.</p>
                                        <p>The minimum closure amount is N4000 (Four Thousand Naira). If after notification and on the date of the closure there are any funds (local or digital currency) in your account, you accept that we shall retain such funds and you shall have no claim to them.</p>
                                        <p>We shall not be liable to you or any third party with respect to the deletion, closure or suspension of your account.</p>
                                        <p><strong>12.2</strong> You accept that, once your account is closed:</p>
                                        <ul className="ml-4">
                                            <li>We reserve the right to delete all your account information on our server and the right to retain any information required for legal and operational reasons</li>
                                            <li>It will not be accessible to you.</li>
                                            <li>We are under no obligation to notify you of, or provide you with, any digital currency credited to your Account.</li>
                                        </ul>
                                    </Accordion>
                                    <Accordion title="13.0 Financial Advice">
                                        <p>No information provided by this service with respect to your account and e-wallet shall constitute financial, investment or other professional advice.</p>
                                        <p>You are solely responsible for any decision to load, store, buy or sell digital currency, and such decision should take into account your risk appetite and financial circumstances. Kindly contact your legal or financial adviser in relation to your specific situation.</p>
                                    </Accordion>
                                    <Accordion title="14.0 Taxes">
                                        <p>We shall apply transaction applicable tax to the extent that they apply when transactions are carried out using the service and account. All taxes collected shall be reported and remitted to the appropriate tax authorities.</p>
                                        <p>You are solely responsible for any decision to load, store, buy or sell digital currency, and such decisions should take into account your risk appetite and financial circumstances. Kindly contact your legal or financial adviser in relation to your specific situation.</p>
                                    </Accordion>
                                    <Accordion title="15.0 No Warranties">
                                        <p>Our services are provided on an “as-is” and “as-available” basis without any representation or warranty, whether express or implied, to the maximum extent permitted by the applicable law.</p>
                                        <p>We make no representations about the accuracy of the historical digital currency data available on the service. We will make efforts to ensure that all requests are processed on time, but we make no warranties regarding the length of time required to complete processing which depends on factors outside our control.</p>
                                    </Accordion>
                                    <Accordion title="16.0 Limitation Of Liability">
                                        <p>Except as otherwise provided for in this Agreement, we, our affiliates or service providers, our officers, directors, agents, employees or representatives, shall not be liable for any amount greater than the value of the digital currency and e-money in your e-wallet at any given time. Where we are considering a specific claim relating to a specific transaction this sum shall be further limited to the amount of the transaction in dispute.</p>
                                    </Accordion>
                                    <Accordion title="17.0 Indemnity">
                                        <p>To the maximum extent permitted by law, you agree to indemnify ScaleX harmless, its affiliates, directors, officers and agents from and against any claims or actions, as well as any and all liabilities, damages, costs and expenses arising out of or accruing from the use of our service or your Account in violation of this terms, or your Application that infringes any copyright, trademark, trade secret, patent or other intellectual property right of any person or defames any person or violates their rights of publicity or privacy, or failure to secure and keep secret your Token or API key.</p>
                                    </Accordion>
                                    <Accordion title="18.0 Disputes">
                                        <p><strong>1. </strong> Any difference, dispute, controversy or claim (“Dispute”) which may arise between the Parties out of or in relation to or in connection with this Agreement, or the breach, termination, effect, validity, interpretation or application of this Agreement or as to their rights, duties or liabilities hereunder, other than a dispute for which provisions specifically made in this Agreement, the parties shall use their best endeavours to settle such dispute by mutual negotiations and agreement.</p>
                                        <p><strong>2. </strong> If the Parties cannot resolve such dispute amicably, such dispute shall be settled by a Sole Arbitrator appointed by both parties. The parties shall concur on the appointment of an Arbitrator within fourteen (14) days notice being received of the nomination of such Arbitrator. Parties shall concur on the nomination of a single Arbitrator and shall forward their proposed list of potential arbitrators attaching the Curriculum Vitae of such individuals to either party.</p>
                                        <p><strong>3. </strong> Any difference, dispute, controversy or claim (“Dispute”) which may arise between the Parties out of or in relation to or in connection with this Agreement, or the breach, termination, effect, validity, interpretation or application of this Agreement or as to their rights, duties or liabilities hereunder, other than a dispute for which provisions specifically made in this Agreement, the parties shall use their best endeavours to settle such dispute by mutual negotiations and agreement.Where parties fail to concur on the appointment of an Arbitrator as provided for in sub (c) above, either party shall be at liberty to apply to a Judge of the State High Court to appoint an Arbitrator.</p>
                                        <p><strong>4. </strong> Arbitration under this Agreement shall be conducted under the Arbitration and Conciliation Act (CAP. A18) Laws of the Federation of Nigeria 2007 and judgment upon the Award may be entered in any state having jurisdiction. The venue of Arbitration shall be in Lagos State.</p>
                                        <p><strong>5. </strong> Any decision and/or award made by the arbitrator shall be final, conclusive and binding on the parties and shall be enforceable in a court of competent jurisdiction in Nigeria except in the case of fraud.Any decision and/or award made by the arbitrator shall be final, conclusive and binding on the parties and shall be enforceable in a court of competent jurisdiction in Nigeria except in the case of fraud.</p>
                                    </Accordion>
                                    <Accordion title="19.0 Miscellaneous ">
                                    </Accordion>
                                    <Accordion title="19.1 Entire agreement">
                                        <p>These terms including the privacy policy and AML/CFT policy comprise the entire agreement between you and Scalex.</p>
                                    </Accordion>
                                    <Accordion title="19.2 Governing Law">
                                        <p>This Agreement shall be governed by, and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
                                    </Accordion>
                                    <Accordion title="19.3 Breach">
                                        <p>If you suspect that your Account or any of your details have been compromised or you become aware of any fraud or attempted fraud or any other security incident affecting you and/or ScaleX, you must notify ScaleX Support immediately by email at (insert link) or by calling us on (insert number) and continue to provide accurate information throughout the duration of the Breach. You must take required steps to reduce and report any Breach. Failure to provide prompt notification of any Breach will be taken into account in the resolution of the matter.</p>
                                    </Accordion>
                                    <Accordion title="19.4 Account Inactivity">
                                        <p>If you have not accessed your account for a few years and we are unable to contact you but hold e-money on your behalf, we may be required to report and deliver such funds to the relevant authorities as unclaimed money. We reserve the right to deduct a dormancy fee or administrative charges incurred by holding such unclaimed funds.</p>
                                    </Accordion>
                                    <Accordion title="19.5 Agency">
                                        <p>Nothing in this Agreement shall be deemed or shall cause, either you or ScaleX to be treated as the agent of each other.</p>
                                    </Accordion>
                                    <Accordion title="19.6 Invalidity of Terms">
                                        <p>If any provision of these terms as may be amended periodically is determined to be invalid or unenforceable, in part or in whole under any applicable law, this will not affect the validity of any other provision as stated in these terms.</p>
                                    </Accordion>
                                    <Accordion title="19.7 Transfer">
                                        <p>This agreement is personal to you and you cannot transfer or assign your rights, interests or obligations to anyone else. We may transfer or assign our rights licenses, interests and our obligations at any time, including as part of a merger, acquisition or other corporate restructuring, provided that this transfer or assignment does not materially impact the quality of our Services.</p>
                                    </Accordion>
                                    <Accordion title="19.8 Force Majeure">
                                        <p>Scalex is not liable for a breach or non-performance of the conditions of these terms to the extent that the breach is caused by circumstances beyond the control of Scalex, its affiliates, employees or agents and for the period those circumstances persist.</p>
                                    </Accordion>
                                    <Accordion title="19.9 Security">
                                        <p>You must not create security over your e-money unless you we had permitted same in writing.</p>
                                    </Accordion>
                                    <Accordion title="19.10 Headings">
                                        <p>Clause headings in these terms are for convenience only, and shall not govern the meaning or interpretation of any provision.</p>
                                    </Accordion>
                                    <Accordion title="19.11 English language controls">
                                        <p>This terms and any information that you or we will provide should be in English. The translation of these terms and other documents provided on this service is for your information. In doubt, the English language version of this Agreement and other documents shall prevail.</p>
                                    </Accordion>
                                    <Accordion title="19.12 Contact Us">
                                        <p>We are delighted to always here from you. Visit our contact page here (insert link) prevail.</p>
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

export default Terms