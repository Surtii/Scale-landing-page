import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Spinner } from 'reactstrap';
import axios from 'axios'
import useValidator from '../../validateHook/useValidator'


import Layout from '../../components/New/Layout'
import NavbarComponent from '../../components/New/NavbarComponent';

const Verification = ({match}) => {
    const [bvn, setBvn] = useState('')
    const [bank_code, setBankCode] = useState('')
    const [verifiedName, setVeriName] = useState('')
    const [account_number, setAccountNumber] = useState('')
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')

    const [validator, showValidatorMessage] = useValidator();
    const id = match.params.id;


    const ValidateUser = async (id) => {
        try {
            const config = {
                headers: {
                    's-signature': process.env.REACT_APP_API_SECRET,
                    'Content-Type': 'application/json',
                }
            }
            const user = await axios.get(`https://surtii.com/v1/scale.ai/user/details/${id}`, config)
            // console.log(id)
            const { account_details:{ account_number, bank_code }, verified_name} =  user.data.data
            setBankCode(bank_code)
            setVeriName(verified_name)
            setLoading(false)
            setAccountNumber(account_number)
    
        } catch (err) {
            console.log(err)
        }
     
    }

    useEffect(() => {
        ValidateUser(id)
    }, [id])


    const handleChange = (e) => {
        const { value} = e.target
        setBvn(value)
    }
    

    const veriParams = {bvn, bank_code, account_number} 

    const VerifyBVN = async (veriParams) => {

        try {
            const config = {
                headers: {
                    'Authorization': process.env.REACT_APP_PAYSTACK_API_SECRET,
                    'Content-Type': 'application/json',
                },
              
            }
            const veri = await axios.post('https://api.paystack.co/bvn/match', veriParams, config)
            const status = veri.data.status
            
            if(status){
                try {

                    const config = {
                        headers: {
                            's-signature': process.env.REACT_APP_API_SECRET,
                            'Content-Type': 'application/json',
                        }
                    }

                    const update = await axios.post(`https://surtii.com/v1/scale.ai/user/update/tier`,{bvn, id}, config)

                    setMessage(update.data.message)
                    setBvn('')
                } catch (err) {
                    console.log(err)
                }
            }else{
                setMessage('Network Failure, try again.')
                setBvn('')
            }
            
        } catch (err) {
            console.log(err)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    

        if(validator.allValid()){
            VerifyBVN(veriParams)
        }else{
            showValidatorMessage(true)
        }
    }



    return (
        <Layout>
            <Helmet>
                <title>Tier 2 Verification</title>
                <meta name="title" content="ScaleX - Tier 1 Verification"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            <section className="scalex-verification">
                <Container>
                    <Row>
                        <Col>
                           <div className="scalex-verification__wrapper">
                                <h3>Verification</h3>
                                {
                                    loading ? (
                                        <Spinner color="primary" style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
                                    ):(
                                        <Fragment>
                                        <p className="text-center">Hi {verifiedName}, Kindly verify your BVN to increase your transaction limit</p>
                                            {
                                                message ? (
                                                    <div className="col-md-6 offset-md-3">
                                                        <div className="alert alert-success text-center" role="alert">
                                                            {message}
                                                        </div>
                                                    </div>
                                                ): ('')
                                            }
                                            <div className="scalex-verification__wrapper--form">
                                                <form autoComplete="off" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6 offset-md-3 my-4">
                                                            <Input 
                                                                type="text" 
                                                                placeholder="Enter your BVN number" 
                                                                name="bvn"
                                                                value={bvn}
                                                                onChange={handleChange}
                                                            />
                                                            {
                                                                validator.message('bvn', bvn, 'required|min:11|max:11', {
                                                                    message: {
                                                                        required: 'Required'
                                                                    },
                                                                    className: 'text-danger error-message'
                                                                })
                                                            }
                                                        </div>
            
                                                    </div>
                                                    <Button color="primary">Verify</Button>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                }
                           </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default withRouter(Verification)
