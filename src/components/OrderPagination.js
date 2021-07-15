import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const OrderPagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
    <Pagination aria-label="Page navigation example">

        <PaginationItem >
            <PaginationLink previous />
            {/* <PaginationLink previous  onClick={()=> paginate(postsPerPage - 1)}/> */}
        </PaginationItem>
        {pageNumbers.map(number => (
            <PaginationItem key={number} active>
                <PaginationLink onClick={()=> paginate(number)} >
                {number}
                </PaginationLink>
            </PaginationItem>
            
        ))}
        <PaginationItem>
            <PaginationLink next />

            { /*  <PaginationLink next  onClick={()=> paginate(postsPerPage + 1)}/> */}
        </PaginationItem>
    </Pagination>
    )
}

export default OrderPagination
