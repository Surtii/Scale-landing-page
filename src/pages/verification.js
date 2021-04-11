import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import { Spinner } from 'reactstrap'
import axios from 'axios'
import useValidator from '../validateHook/useValidator'

import Layout from '../components/Layout'


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
            <div className="contact-us-one" id="contact">
                <div className="container">
                    <div className="my-5">
                        <div className="verification-wrapper">
                            <h4 className="text-center">BVN Verification</h4>
                        
                        </div>
                        { loading ? (
                            <Spinner style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
                        ):(
                            <Fragment>
                                <p className="text-center">Hi {verifiedName}, Kindly verify your BVN to increase your transaction limit</p>
                                <div className="row">
                                    {
                                        message ? (
                                            <div className="col-md-6 offset-md-3">
                                                <div className="alert alert-success text-center" role="alert">
                                                    {message}
                                                </div>
                                            </div>
                                        ): ('')
                                    }
                                </div>
                                
                                <form autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                            <input 
                                                type="text" 
                                                placeholder="Your 11 digits" 
                                                name="bvn"
                                                value={bvn}
                                                onChange={handleChange}
                                            />

                                            {
                                                validator.message('bvn', bvn, 'required|min:11|max:11', {
                                                    message: {
                                                        required: 'Required'
                                                    },
                                                    className: 'text-danger'
                                                })
                                            }
                                        </div>
                                    </div>
                                    <button>Verify</button>
                                </form>
                            </Fragment>
                        )
                    }
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(Verification) 
