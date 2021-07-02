import React, { useEffect } from 'react'
import AOS from "aos";
import OwlCarousel from 'react-owl-carousel';
import CountUp from 'react-countup';
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";

import { options,  option2, option3} from '../utils/carousel'
import AllPrices from '../components/AllPrices'
import Navbar from '../components/Navbar';

import Mock04 from '../images/scalex-telegram-01.png'
import Mock05 from '../images/scalex-telegram-02.png'
import Mock06 from '../images/scalex-telegram-03.png'

import Security from '../images/security.svg';
import Trust from '../images/trust.svg';
import Speed from "../images/speed.svg";

import ETH from '../images/eth-logo.png';
import BTC from '../images/btc-logo.png';
import USDT from '../images/usdt-logo.png';
import NGNT from '../images/ngnt-logo.png'
import DOGE from '../images/doge-logo.png'
import LITECOIN from '../images/litecoin-logo.png'



const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])

    return (
        <div>
          <Helmet>
            <title>ScaleX - Messenger chatbot for P2P cryptocurrency exchange</title>
            <meta name="title" content="ScaleX - Messenger chatbot for P2P cryptocurrency exchange"/>
            <meta name="description" content="ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
          </Helmet>
          <div className="main-page-wrapper">

            <div className="html-top-content">
            
              <div className="theme-top-section">
                <Navbar/>
                <div id="theme-banner" className="theme-banner-one">
                  <div className="container">
                    <div className="row">
                        <div className=" col-lg-6 col-md-12 col-sm-12 order-lg-first order-md-first order-sm-last">
                          <div className="main-text-wrapper">
                            <h2>Messenger chatbot <br/>for P2P cryptocurrency exchange</h2>
                            <p className="col-lg-12 col-md-10 col-sm-12">ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere.</p>
                            <ul className="button-group clearfix">
                              <li><a href="https://t.me/scalexp2pbot">Trade Now</a></li>
                            </ul>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 order-lg-last order-md-last order-sm-first">
                        <div className="d-flex justify-content-center padding-top">
                          <img src={Mock04} alt="Seller's Conversation" className="mockup-01" data-aos="fade-down" data-aos-duration="2500"/>
                          <img src={Mock05} alt="Buyer's Conversation" className="mockup-02" data-aos="fade-up" data-aos-duration="2500"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="stock-market-price">
                      <div id="market-rate">
                      <OwlCarousel  
                      { ...options}
                      >  
                        <AllPrices/>
                        
                      </OwlCarousel> 
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div> 

              <div className="our-features-one" id="features">
                <div className="container">
                  <div className="theme-title">
                    <h2>You need not <span>download </span>another App </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <div className="single-feature">
                        <p>ScaleX Chatbot is a fast-rising P2P solution offering easy and secure crypto exchange at your fingertips. (accessible on your telegram)</p>
                      </div>
                    </div> 
                    
                  </div>
                </div>
              </div> 

              <div className="our-feature-two" id="services">
                <div className="container">
                  <div className="row single-block">
                    <div className="col-lg-6">
                      <div className="text">
                        <div className="number">01</div>
                        <h2 className="title"><span>Security First,</span> Always.</h2>
                        <p>ScaleX’s primary goal is to ensure transactions are done with ease in a secure environment protected by an Escrow. This was further enhanced by building our infrastructure on the blockchain.</p>
                      </div> 
                    </div> 
                    <div className="col-lg-6 img-box"><div><img src={Security} height="300" width="400" alt="Safety"/></div></div>
                  </div>

                  <div className="row single-block">
                    <div className="col-lg-6 order-lg-last">
                      <div className="text">
                        <div className="number">02</div>
                        <h2 className="title"><span>Trust</span> is a Strong Commodity.</h2>
                        <p>To use ScaleX means you do not have to be familiar with strangers before earning their trust. Trust is what ScaleX is built upon, ensuring peace of mind as you focus on scaling your crypto business.</p>
                      </div> 
                    </div> 
                    <div className="col-lg-6 order-lg-first img-box"><div><img src={Trust} height="350" width="400" alt="Safety"/></div></div>
                  </div>

                  <div className="row single-block">
                    <div className="col-lg-6">
                      <div className="text">
                        <div className="number">03</div>
                        <h2 className="title"><span>Speed</span> is Important to SCALE.</h2>
                        <p>ScaleX is dedicated to helping you scale as a crypto exchanger; this is why we have built a system that speeds up transaction processes through our seamless and interactive bot interface.</p>
                      </div> 
                    </div> 
                    <div className="col-lg-6 img-box"><div><img src={Speed} height="350" width="400" alt="Safety"/></div></div>
                  </div> 
                </div> 
              </div>

              <div className="apps-overview color-one" id="apps-review">
                <div className="overlay-bg" style={{backgroundImage: `url('/bg2.png')`}}>
                  <div className="container">
                    <div className="inner-wrapper">
                      <div className="row">
                        <div className="col-lg-5">
                          <img src={Mock06} width="358" height="500" alt="Seller's Conversation" className="mockup-01" data-aos="fade-down" data-aos-duration="2500"/>
                        </div>
                        <div className="col-lg-7 ">
                          <div className="text">
                            <h2>Telegram Escrow Bot for Faster Transactions.</h2>
                            <h6>You don’t need to download another App!</h6>
                            <p>Telegram is fast becoming a go-to marketplace for cryptocurrency exchanges. As such, ScaleX Chatbot is modelled around your day-to-day conversations during a P2P crypto transaction on Telegram and other messenger platforms.</p>
                            <ul className="button-group">
                              <li><a href="https://www.scalex.africa/orders">Start trading</a></li>
                            </ul>
                          </div> 
                        </div>
                      </div>
                    </div> 
                  </div>
                </div> 
              </div> 

              <div className="theme-counter">
                <div className="container">
                  <div className="bg-image">
                    <div className="row theme-title">
                      <div className="col-lg-6 order-lg-last">
                        <h2><span>Fastest</span> Rising<br/> Crypto Escrow Bot</h2>
                      </div>
                      <div className="col-lg-6 order-lg-first">
                        <p>ScaleX is the first of its kind. A P2P chatbot that helps bring balance to the imbalances in the cryptocurrency P2P ecosystem.</p>
                      </div>
                    </div>

                    <div className="counter-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <h2 className="number"><span className="timer"><CountUp end={7.5} /></span>K</h2>
                          <p>Transactions</p>
                        </div>
                        <div className="col-sm-4">
                          <h2 className="number"><span className="timer"><CountUp end={350} /></span></h2>
                          <p>Users</p>
                        </div>
                        <div className="col-sm-4">
                          <h2 className="number"><span className="timer"><CountUp end={6} /></span></h2>
                          <p>Coins</p>
                        </div>
                      </div>
                    </div> 
                  </div> 
                </div> 
              </div> 

              <div className="our-work-progress bg-color" id="progress">
                <div className="main-wrapper clearfix">
                  <div className="section-title-wrapper clearfix">
                    <div className="theme-title">
                      <div className="upper-heading">Process</div>
                      <h2>How <span>ScaleX </span>works</h2>
                      <p>We pooled your ideas and wishes, bundled them into a simple and unique solution just to inspire you, your customers, and the ecosystem.</p>
                    </div>
                  </div> 
                  <div className="progress-slider-wrapper">
                    <div className="progress-slider">
                      <OwlCarousel {...option2}>
                        <div className="item">
                          <div className="inner-block">
                            <div className="icon"><i className="fa fa-file-text"></i></div>
                            <h3>Generate Invoice</h3>
                            <p>After buyer and seller have mutually agreed to the transaction terms, either party creates an invoice through the ScaleX Chatbot </p>
                            <div className="num">1</div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="inner-block">
                            <div className="icon"><i className="fa fa-book"></i></div>
                            <h3>Confirm Invoice</h3>
                            <p>Both parties review invoice and mutually accept it as satisfactory </p>
                            <div className="num">2</div>
                          </div> 
                        </div>
                        <div className="item">
                          <div className="inner-block">
                            <div className="icon"><i className="fa fa-bitcoin"></i></div>
                            <h3>Escrow tokens </h3>
                            <p>ScaleX provides an appropriate wallet to the seller to deposit tokens into escrow. </p>
                            <div className="num">3</div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="inner-block">
                            <div className="icon"><i className="fa fa-compass"></i></div>
                            <h3>Upload Hash</h3>
                            <p>Hash is uploaded to ScaleX as a measure to validate confirmation of deposit by the seller. Upon confirmation of deposit on the blockchain, the buyer is authorized to credit the seller via preferred currency (e.g. Fiat). </p>
                            <div className="num">4</div>
                          </div> 
                        </div>
                        <div className="item">
                          <div className="inner-block">
                            <div className="icon"><i className="fa fa-dollar"></i></div>
                            <h3>Payment confirmation and release of tokens </h3>
                            <p>Seller confirms buyer's payment and proceeds to authorize ScaleX to release tokens to buyer's wallet.</p>
                            <div className="num">5</div>
                          </div> 
                        </div>
                      </OwlCarousel>
                    </div> 
                  </div> 
                </div> 
              </div> 
          
              <div className="partner-section">
                <div className="container">
                  <div className="partner-slider">
                    <OwlCarousel { ...option3 }>
                      <div className="item"><img src={ETH} alt="Ethereum Logo"/></div>
                      <div className="item"><img src={BTC} alt="Bitcoin Logo"/></div>
                      <div className="item"><img src={USDT} alt="USDT Logo"/></div>
                      <div className="item"><img src={NGNT} alt="NGNT Logo"/></div>
                      <div className="item"><img src={DOGE} alt="DOGE Logo"/></div>
                      <div className="item"><img src={LITECOIN} alt="LITECOIN Logo"/></div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>

              <footer className="theme-footer">
                <div className="container">
                  <div className="inner-wrapper">
                    <div className="top-footer-data-wrapper">
                      <div className="row">
                        <div className="col-lg-12 col-sm-6 footer-logo">
                          <div className="theme-title text-center">
                            <h2>Contact<span> Us</span></h2>
                          </div>
                          <Link to="#." className="email text-center">scalex@surtii.com</Link>                    
                        </div>
                        
                      </div>
                    </div> 

                    <div className="bottom-footer clearfix">
                      <p className="copyright">&copy; 2021 <Link to="#.">ScaleX Escrow</Link> All Right Reserved</p>
                      <ul>
                        <li><a href="https://www.facebook.com/SURTiiTech">{''}<i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/ScaleX_Africa">{''}<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/p2pbyscale/">{''}<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div> 
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
    )
}

export default Home
