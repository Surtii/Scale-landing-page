import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/scale-logo-2-150x50.png'
const Navbar = () => {
    return (
        
        <header className="theme-main-menu">
            <div className="container">
                <div className="menu-wrapper clearfix">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="author" />
                        </Link>
                    </div>
                    
                </div>
            </div> 
        </header> 
    )
}

export default Navbar
