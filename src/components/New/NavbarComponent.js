import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Navbar, Nav, NavItem, Button } from 'reactstrap';

import Logo from '../../images/apple-touch-icon.png'


const NavbarComponent = () => {
    return (
        <Navbar className="scalex-navbar">
            <Container>
                <Link to="/" className="navbar-brand">
                   <div className="d-flex align-items-center"><img src={Logo} alt="Logo" className="logo"/><span>Scalex</span></div>
                </Link>

                <Nav className="ml-auto" navbar>
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
