import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                
            <LinkContainer to='/'>
            <Navbar.Brand >AfroAsia</Navbar.Brand>
            </LinkContainer>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
            <LinkContainer to='/cart'>
            <Nav.Link> <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </LinkContainer>       
               <LinkContainer to="/login">
               <Nav.Link ><i className="fas fa-user"></i>Log in</Nav.Link>
               
               </LinkContainer>
               
               </Nav>

              </Navbar.Collapse>
              
            </Navbar>
          
            
        </header>
    )
}

export default Header
