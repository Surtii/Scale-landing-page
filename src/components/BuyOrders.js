import React, { useState, useEffect } from 'react'
import { Spinner, Button } from 'reactstrap'
import DataTable from 'react-data-table-component';
import axios from 'axios'
import Moment from 'react-moment'


const columns = [
  {
    name: 'Buyer ID',
    selector: 'buyer_id',
    sortable: true,
  },
  {
    name: 'Coin Type',
    selector: 'coin_type',
    sortable: true,
  },
  {
    name: 'Volume',
    selector: 'amount',
    sortable: true,
  },
  {
    name: 'Rate',
    selector: 'rate_in_fiat',
    sortable: true,
  },
  {
    name: 'Negotiable',
    selector: 'negotiable',
    cell: (row) => (<span>{
        row.negotiable === false ? (<span> No </span>): (<span>Yes</span>)
    }</span>),
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'date_created',
    cell: (row) => (<span><Moment format="D MMM YYYY, h:mm:ss">{row.date_created}</Moment></span>),
    sortable: true,
  },
  {
    name: 'Action',
    cell: (row) => (<a href={`https://t.me/ScaleXP2PBot?start=q_${row.transaction_id}`}><Button color="success">Buy</Button></a>),
    button: true,
    ignoreRowClick: true,
    allowOverflow: true
  },
];

const BuyOrders = () => {

  const [buyOffers, setBuyOffers] = useState([])
  const [loading, setLoading] = useState(true)

  const getBuyOffers = async () => {
    try {
        const config = {
            headers: {
                's-signature': process.env.REACT_APP_API_SECRET,
                'Content-Type': 'application/json',
            }
        }
        const offers = await axios.get('https://surtii.com/v1/scale.ai/offers/buy', config)

        const data = offers.data.data

        setBuyOffers(data)
        setLoading(false)

    } catch (err) {
        console.log(err)
    }
 
}

useEffect(() => {
    getBuyOffers()
    
}, [])

    return (
        <div className="buy-orders">
        {
          loading ? (
               <Spinner style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
          ):(
              <DataTable
                columns={columns}
                data={buyOffers}
                defaultSortField="true"
                highlightOnHover
                pagination
              />
            )
        }
            
        </div>
    )
}

export default BuyOrders
