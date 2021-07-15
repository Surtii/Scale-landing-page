import React, {useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import { Helmet } from "react-helmet";
import axios from 'axios'
import Layout from '../components/Layout'

const initialState = {
    coin : '',
    unit: '',
    rate: '',

}

const Converter = () => {
    const [formData, setFormData] = useState(initialState)
    const [price, setPrice] = useState('')
    const [result, setResult] = useState(0)

    const { coin, unit, rate } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]:value })
    }

    // const handlePrice = () => setPrice(price);


    const getPrice = async (coin) => {
        try {
            let isSubscribed = true;
      
              if(isSubscribed){

                if(coin === 'btc' || coin === 'eth' || coin === 'ltc' || coin === 'doge' || coin === 'usdt'){
                    const res = await axios.get(`https://api.coinbase.com/v2/prices/${coin}-usd/spot`)
      
                    const data = res.data.data.amount

                    setPrice(data)
                    console.log(data)

                }else if( coin === 'bnb'){
                    const config = {
                        headers: {
                            "Authorization": process.env.REACT_APP_CHAINGATE_API_KEY_V1,
                            'Access-Control-Allow-Origin':'*',
                            'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
                            'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization',
                            'Content-Type': 'application/json',
                        },
                        data:{
                            currency: "usd"
                        }
                    }
                    const res = await axios.post('https://eu.bsc.chaingateway.io/v1/getExchangeRate', config)
      
                    const data = res.data.rate

                    setPrice(data)

                    console.log(data)
                }
                
        
              }
      
              return () => isSubscribed = false
      
          } catch (err) {
            console.log(err)
        }
      }
      
    useEffect(() => {
        getPrice(coin);
    }, [coin])


    const handleSubmit = (e) => {
        e.preventDefault();

        let re = price * unit * rate
        re = re.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

        setResult(re)

    }

    return(
        <Layout>
            <Helmet>
                <title>Converter</title>
                <meta name="title" content="Scalex - Converter"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <div className="converter">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center">Converter</h3>
                        </Col>
                    </Row>
                    <Row> 
                        <Col>
                            <div className="converter-wrapper mt-5">
                                <div className="d-flex justify-content-center">
                                    <Form onSubmit={handleSubmit}>
                                        <Row form>
                                            <Col md={3} sm={3}>
                                                <FormGroup>
                                                    <Input type="select" name="coin" value={coin} onChange={handleChange}>
                                                        <option value="">Choose Coin</option>
                                                        <option value="btc">BTC</option>
                                                        <option value="eth">ETH</option>
                                                        {/*<option value="bnb">BNB</option>*/}
                                                        <option value="ltc">LTC</option>
                                                        <option value="doge">DOGE</option>
                                                        <option value="usdt">USDT</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Input 
                                                        type="text" 
                                                        name="unit" 
                                                        value={unit} 
                                                        placeholder="Unit (E.g. 0.2)"
                                                        onChange={handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Input 
                                                        type="text" 
                                                        name="rate"
                                                        value={rate} 
                                                        placeholder="₦ to $ (E.g. 490)"
                                                        onChange={handleChange}
                                                    />
                                                </FormGroup>  
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Button type="submit" color="primary" block>Convert</Button>  
                                                    
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className="result-wrapper">
                                    <p className="text-center result"> = ₦ {result}</p>
                                </div> 
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <p className="text-center note mt-5"> Note: Price data sourced from <a href="https://coinbase.com/">Coinbase</a></p>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            
            </div>
        </Layout>
    )
}



export default Converter