import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                
               <Navbar.Brand href="/">AfroAsia</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
               <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
               <Nav.Link href="/Login"><i className="fas fa-user"></i>Log in</Nav.Link>
               </Nav>

              </Navbar.Collapse>
              
            </Navbar>
          
            
        </header>
    )
}

export default Header
