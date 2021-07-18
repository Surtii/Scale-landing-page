import React from 'react'
import Dollar from '../../images/dollar.svg'


const TradeFee = () => {
    

    return(
        <div className="scalex-fees__trade-fee">
            <div className="d-flex flex-column align-items-center">
                <img src={Dollar} alt="Dollar" />
                <p>We charge a flat trading fee of 0.07% across all trading pairs</p>
            </div>
        </div>

    )
}

export default TradeFee