
import React, { Component } from 'react';

import { Nav} from 'react-bootstrap';
class AuthNav extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.navType == 'registeration'){
            this.defaultActiveKey = '/register';
        }
        else if(this.props.navType == 'login'){
            this.defaultActiveKey = '/login';
        }
    }
    render() {
        
        return (
            <div className="row">
                <div className="col-sm-12">
                <Nav variant="tabs" defaultActiveKey={this.defaultActiveKey}>
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