import React from 'react'

import BTC from '../../images/btc-logo.png'
import ETH from '../../images/eth-logo.png'
import LTC from '../../images/litecoin-logo.png'
// import DOGE from '../../images/doge-logo.png'
import USDT from '../../images/usdt-logo.png'
import BNB from '../../images/bnb.svg'
import NGNT from '../../images/ngnt-logo.png'
import BUSD from '../../images/busd.png'

const SendReceiveFee = ({btc, btc_bep_20, eth, eth_bep_20, ltc, bnb, busd, ngnt, usdt_erc_20, usdt_bep_20, usdt_trc_20}) =>  {


    return(
        <div className="scalex-fees__wrapper">
            <div className="scalex-fees__wrapper--title">
                 <div className="d-flex justify-content-between">
                    <h4>Currency</h4>
                    <h4>Fees</h4>
                </div>
                <hr/>
            </div>

            <div className="scalex-fees__wrapper__group">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={BTC} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p> BTC - Bitcoin</p>
                    </div>
                    <p>{btc}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={BTC} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p> BTC - BEP 20</p>
                    </div>
                    <p>{btc_bep_20}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={ETH} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p> ETH - Ethereum</p>
                    </div>
                    <p>{eth}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={ETH} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p> ETH - BEP 20</p>
                    </div>
                    <p>{eth_bep_20}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={LTC} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>LTC - Litecoin</p>
                    </div>
                    <p>{ltc}</p>
                </div>

                {/*
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={DOGE} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>DOGE</p>
                    </div>
                    <p>Dynamic</p>
    </div>*/}
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={BNB} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>BNB</p>
                    </div>
                    <p>{bnb}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={BUSD} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>BUSD</p>
                    </div>
                    <p>{busd}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={NGNT} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>NGNT</p>
                    </div>
                    <p>{ngnt}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={USDT} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>USDT - ERC 20</p>
                    </div>
                    <p>{usdt_erc_20}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={USDT} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>USDT - BEP 20</p>
                    </div>
                    <p>{usdt_bep_20}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            <img src={USDT} className="scalex-fees__wrapper__group--image" alt="Bitcoin"/> 
                        </span>
                       <p>USDT - TRC 20</p>
                    </div>
                    <p>{usdt_trc_20}</p>
                </div>

            </div>
        </div>
    )
}



export default SendReceiveFee