import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Navbar, Nav, NavItem, Button } from 'reactstrap';

import Logo from '../images/scale-logo-2-150x50.png'


const NavbarComponent = () => {
    return (
        <Navbar className="scalex-navbar">
            <Container>
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="Logo" className="logo"/>
                </Link>
                <Nav className="ml-auto flex-row align-items-center" navbar> 
                    <NavItem>
                        <Link to="/fees" className="nav-link mx-3">Fees</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/orders" className="nav-link">
                            <Button color="link" className="start-trading">Start Trading</Button>
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default NavbarComponent
