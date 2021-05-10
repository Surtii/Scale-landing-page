import React from 'react'
import DataTable from 'react-data-table-component';

const data = [{ id: 1, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982' }];
const columns = [
  {
    name: 'Title',
    sortable: true,
    cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: 'bold' }}>{row.title}</div>{row.summary}</div>,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

const BuyOrders = () => {
    return (
        <div className="buy-orders">
            <DataTable
                columns={columns}
                data={data}
                defaultSortField="true"
                selectableRows
                highlightOnHover
            />
        </div>
    )
}

export default BuyOrders
