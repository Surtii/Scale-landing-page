import React, { useState, useEffect } from 'react'
import { Spinner, Button } from 'reactstrap'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import axios from 'axios'
import Moment from 'react-moment'


const columns = [
  {
    name: 'Seller ID',
    selector: 'seller_id',
    sortable: true,
  },
  {
    name: 'Coin Type',
    selector: 'coin_type',
    sortable: true,
  },
  {
    name: 'Volume',
    selector: 'available_amount',
    sortable: true,
    cell: (row) => <span>{row.available_amount.toFixed(4)}</span>
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
  const [buyOffers, setBuyOffers] = useState(null)
  const [loading, setLoading] = useState(true)


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


  return (
      <div className="buy-orders" >
        {
          loading ? (
                <Spinner style={{ width: '3rem', height: '3rem', top: '50%', left: '47%', position: "absolute" }} />
          ):(
            <DataTableExtensions
              columns={columns}
              data={buyOffers}
              export={false}
              print={false}
              filterPlaceholder="Search Coin"
            >
              <DataTable
                defaultSortField="true"
                highlightOnHover
                pagination
                persistTableHead
                noHeader
              />
            </DataTableExtensions>
            )
        }
          
      </div>
  )
}

export default BuyOrders
