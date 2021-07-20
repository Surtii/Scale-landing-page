import React, { Fragment, useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
       <Fragment>
            <hr/>
            <div className="scalex-accordion--accordion-item">
                <div 
                    className="scalex-accordion--accordion-title d-flex justify-content-between align-items-center" 
                    onClick={() => setIsActive(!isActive)}
                >
                    <div>{title}</div>
                    <div>{isActive ? 'x' : '+'}</div>
                </div>
                {
                    children ? (
                        isActive && <div className="scalex-accordion--accordion-content">{children}</div>
                    ) : (
                        null
                    )
                }
            </div>
       </Fragment>
    )
}

export default Accordion
