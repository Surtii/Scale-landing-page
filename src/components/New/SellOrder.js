import React, { useState, useEffect, Fragment, useMemo } from 'react'
import { Card, Col, Row, Button, Spinner, Input } from 'reactstrap'
import axios from 'axios'

import OrderPagination from '../OrderPagination'

import NGNT from '../../images/ngnt-logo.png'
import Bitcoin from '../../images/bitcoin.png'
import USDT from '../../images/usdt-logo.png'
import ETH from '../../images/eth-logo.png'
import DOGE from '../../images/doge-logo.png'
import LTC from '../../images/litecoin-logo.png'
import BNB from '../../images/bnb.svg'
import BUSD from '../../images/busd.png'

const SellOrder = () => {

    const [sellOffers, setSellOffers] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const onSearchChange = (event) => setSearch(event.target.value)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    const getSellOffers = async () => {
        try {
    
            let isSubscribed = true;
            const config = {
                headers: {
                    's-signature': process.env.REACT_APP_API_SECRET,
                    'Content-Type': 'application/json',
                }
            }
            if(isSubscribed){
              const offers = await axios.get('https://surtii.com/v1/scale.ai/offers/sell', config)
    
              let data = offers.data.data
                // console.log(data)
    
              setSellOffers(data)
              setLoading(false)
            }
    
            return () => isSubscribed = false
    
        } catch (err) {
            console.log(err)
        }
     
    }
    
    useEffect(() => {
        getSellOffers()
    }, [])
  
  
  
    const filterCoin =  useMemo(() => sellOffers.filter((offer) => {
      return offer.coin_type.toLowerCase().includes(search.toLowerCase());
    }), [sellOffers, search])
  
      
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterCoin.slice(indexOfFirstPost, indexOfLastPost);
  
  
const coinType = (coin_type) => {
    if(coin_type === 'USDT_ERC_20'){
      return "USDT (ERC20)";
    }else if(coin_type === 'ETH_BEP_20'){
        return"ETH (BEP20)";
    }else if(coin_type === 'USDT_BEP_20'){
      return   "USDT (BEP20)";
    }else if(coin_type === 'BTC_BEP_20'){
       return "BTC (BEP20)";
    }else if(coin_type === 'USDT_TRC_20'){
      return  "USDT (TRC20)";
    }else {
      return coin_type
    }
}

const coinImage = (coin_type) => {
    if(coin_type === 'USDT_ERC_20' || coin_type === 'USDT_BEP_20' || coin_type === 'USDT_TRC_20'){
      return <img src={USDT} alt={coin_type}/> ;
    }else if(coin_type === 'DOGE'){
        return <img src={DOGE} alt={coin_type}/>;
    }else if(coin_type === 'BTC' || coin_type === 'BTC_BEP_20'){
      return  <img src={Bitcoin} alt={coin_type}/>;
    }else if(coin_type === 'ETH' || coin_type === 'ETH_BEP_20'){
       return  <img src={ETH} alt={coin_type}/>;
    }else if(coin_type === 'LTC'){
      return <img src={LTC} alt={coin_type}/>;
    }else if(coin_type === 'NGNT'){
        return <img src={NGNT} alt={coin_type}/>;
    }else if(coin_type === 'BNB'){
        return <img src={BNB} alt={coin_type}/>;
    }else if(coin_type === 'BUSD'){
        return <img src={BUSD} alt={coin_type}/>;
    }else{
      return coin_type
    }
}


    return (
        <div className="scalex-order__scalex-sell-order">
            {
                loading ? (
                    <Spinner color="primary" style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
                ):(
                    <Fragment>
                        <Row>
                            <Col md={{ size: 6, offset: 3 }} className="mb-3">
                                <Input 
                                    className="search mt-5"
                                    type='search'
                                    placeholder='search coin. Eg. BTC'
                                    onChange={onSearchChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                        {
                            currentPosts.map((offer, i) => (
                                <Col lg={4} md={6} sm={12} key={i}>
                                    <Card>
                                        <div className="d-flex  align-items-center pb-3">
                                            {coinImage(offer.coin_type)}
                                            <h3>{coinType(offer.coin_type)}</h3>
                                        </div>
                                        <div className="d-flex justify-content-between py-1">
                                            <h6>Quantity: <span>{offer.available_amount}</span></h6>
                                            <h6>Negotiable: <span> {offer.negotiable === true ? ('Yes') : ('No')}</span></h6>
                                        </div>
                                        <div className="d-flex justify-content-between py-1">
                                            <h6>Price(₦): <span>{offer.rate_in_fiat.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </span></h6>
                                            <h6>Min Payment(₦): <span> {offer.minimum_limit.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </span></h6>
                                        </div>
                                        <a href={`https://t.me/ScaleXP2PBot?start=q_${offer.transaction_id}`} >
                                            <Button color="danger" className="btn-block ">Sell</Button>
                                        </a>
                                    </Card>
                                </Col>
                            
                            ))
                        }   
                        </Row>
                        <Row>
                            <Col className="mt-3">
                                {
                                    filterCoin.length > 0 ? (
                                        <OrderPagination
                                            postsPerPage={postsPerPage} 
                                            totalPosts={filterCoin.length} 
                                            paginate={paginate} 
                                        />
                                        
                                    ):(
                                        <p className="text-center text-black no-data">No trade available</p>
                                    )
                                }
                            </Col>
                        </Row>
                    </Fragment>
                )
            }
        </div>
    )
}

export default SellOrder
