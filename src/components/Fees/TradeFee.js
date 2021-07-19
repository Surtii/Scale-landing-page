import React from 'react'
import Dollar from '../../images/dollar.svg'


const TradeFee = () => {
    

    return(
        <div className="scalex-fees__trade-fee">
            <div className="d-flex flex-column align-items-center">
                <img src={Dollar} alt="Dollar" />
                <p>We do not distinguish between takers and makers, each party is charged a flat fee of 0.5% </p>
            </div>
        </div>

    )
}

export default TradeFee