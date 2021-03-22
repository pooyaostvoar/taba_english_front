
import React, { Component } from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
class MenuBar extends React.Component {
    render() {
        
        return (
            <div className="row">
                <div className="col-sm-12">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">Taba English</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#aboutus">About us</Nav.Link>
                        <Nav.Link href="#videos">Videos</Nav.Link>
                    </Nav>
                    
                    <Button variant="outline-light" href="/register">Register</Button>
                </Navbar>
                </div>
            </div>    
    );
    }
  }
  export default MenuBar;