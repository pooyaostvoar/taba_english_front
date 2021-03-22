
import React, { Component } from 'react';

import { Nav} from 'react-bootstrap';
class AuthNav extends React.Component {
    render() {
        
        return (
            <div className="row">
                <div className="col-sm-12">
                <Nav variant="tabs" defaultActiveKey="/register">
                    <Nav.Item>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </div>    
    );
    }
  }
  export default AuthNav;