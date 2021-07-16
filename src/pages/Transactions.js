import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { Spinner } from 'reactstrap'
import DataTable from 'react-data-table-component';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'

import NavbarComponent from '../../components/NavbarComponent';
import Layout from '../../components/Layout'

const columns = [
    {
      name: 'Seller',
      selector: 'seller_name'
    },
    {
      name: 'Buyer',
      selector: 'buyer_name'
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
      name: 'Status',
      selector: 'status'
    },
    {
      name: 'Date',
      selector: 'date_created'
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
            const transactions = await axios.get(`https://surtii.com/v1/scale.ai/user/history/${id}`, config)

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
                <meta name="title" content="Scalex - Transaction History"/>
                <meta name="description" content="Scalex ensures you can securely and seamlessly buy and sell cryptocurrencies from anyone, anytime, anywhere."/>
            </Helmet>
            <NavbarComponent/>
            <div className="scalex-transactions">
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
                                      pagination="true"
                                      defaultSortField="true"
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
