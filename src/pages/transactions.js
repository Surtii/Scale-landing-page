import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { Spinner } from 'reactstrap'
import DataTable from 'react-data-table-component';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import Layout from '../components/Layout'


// const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982', date: 'Conan the Barbarian', country: '1982' }];
const columns = [
  {
    name: 'Seller',
    selector: 'seller'
  },
  {
    name: 'Buyer',
    selector: 'buyer'
  },
  {
    name: 'Quantity',
    selector: 'quantity'
  },
  {
    name: 'Amount',
    selector: 'amount'
  },
  {
    name: 'Token',
    selector: 'token'
  },
  {
    name: 'Date',
    selector: 'date'
  },

];

const Transactions = ({match}) => {
    const [allTransactions, setAllTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    const id = match.params.id;

    const getTransactions = async (id) => {
        try {
            const config = {
                headers: {
                    's-signature': process.env.REACT_APP_API_SECRET,
                    'Content-Type': 'application/json',
                }
            }
            const transactions = await axios.get(`https://surtii.com/v1/scale.ai/user/history${id}`, config)

            const data = transactions.data.data

            setAllTransactions(data)
            setLoading(false)
    
        } catch (err) {
            console.log(err)
        }
     
    }

    useEffect(() => {
        getTransactions(id)
        
    }, [id])


    return (
        <Layout>
            <Helmet>
                <title>Transaction History</title>
                <meta name="title" content="Scale - Transaction History"/>
                <meta name="description" content="ScaleX ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <div className="transactions">
                <Container>
                    <Row>
                        <Col>
                           {
                               loading ? (
                                    <Spinner style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
                               ):(
                                    <DataTable
                                    title="Transaction History"
                                    columns={columns}
                                    data={allTransactions}
                                    />
                               )
                           }
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default withRouter(Transactions)
