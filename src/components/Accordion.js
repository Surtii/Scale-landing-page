import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div className="scalex-accordion--accordion-item">
            <div 
                className="scalex-accordion--accordion-title d-flex justify-content-between align-items-center" 
                onClick={() => setIsActive(!isActive)}
            >
                <div>{title}</div>
                <div>{isActive ? 'x' : '+'}</div>
            </div>
            {isActive && <div className="scalex-accordion--accordion-content"><p>{content}</p></div>}
        </div>
    )
}

export default Accordion
