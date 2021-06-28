import React, { useState, useEffect, Fragment, useMemo } from 'react'
import { Spinner, Input, Button, Card, Row, Col} from 'reactstrap'
import axios from 'axios'


const BuyOrders = () => {
  const [buyOffers, setBuyOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const onSearchChange = (event) => {
    setSearch(event.target.value )
  }


const getBuyOffers = async () => {
  try {
      let isSubscribed = true;

        const config = {
          headers: {
              's-signature': process.env.REACT_APP_API_SECRET,
              'Content-Type': 'application/json',
          }
        }
       
        if(isSubscribed){
          const offers = await axios.get('https://surtii.com/v1/scale.ai/offers/buy', config)

          const data = offers.data.data

          console.log(data)
  
          setBuyOffers(data)
          setLoading(false)
        }

        return () => isSubscribed = false

    } catch (err) {
      console.log(err)
  }
}

useEffect(() => {
    getBuyOffers();
}, [])


const filterCoin =  useMemo(() => buyOffers.filter((offer) => {
  return offer.coin_type.toLowerCase().includes(search.toLowerCase());
}), [buyOffers, search])


  return (
      <div className="buy-orders" >
        {
          loading ? (
                <Spinner style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
          ):(
            <Fragment>
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                  <Input 
                  className="mt-5"
                  type='search'
                  placeholder='search coin. Eg. BTC'
                  onChange={onSearchChange}
                />
              </Col>
            </Row>
            <Row>
            
            {
              filterCoin.map((offer, i) => (
                <Col lg={4} md={6} sm={4} key={i}  className="my-5">
                  <Card body className="buy-card">
                    <div className="d-flex justify-content-between">
                        <div className="order-right">
                          <p>Coin Type: <span>{offer.coin_type} </span></p>
                          <p>Amount: <span>{offer.amount} </span></p>
                          <p>Price in Naira(₦) : <span>{offer.rate_in_fiat} </span></p>
                          <p>Minimum Payment: <span> ₦{offer.minimum_limit} </span></p>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-between align-items-end">
                          <div>
                            <p>Buyer ID: <span>{offer.seller_id} </span></p>
                          </div>
                          <div >
                          <a href={`https://t.me/ScaleXP2PBot?start=q_${offer.transaction_id}`}><Button color="success">Sell</Button></a>
                          </div>
                        </div>
                    </div>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Fragment>
            

            )
        }
          
      </div>
  )
}

export default BuyOrders
