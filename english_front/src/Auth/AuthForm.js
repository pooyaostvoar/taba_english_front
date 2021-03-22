import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css'
import AuthNav from './AuthNav';
class AuthForm extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let email = document.getElementById("formBasicEmail").value;
        let password =  document.getElementById("formBasicPassword").value;
        
        const reqBody = {
          email: "usernam@g.com", 
          password:"password"
        };
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reqBody)
        };
        fetch('/auth/login-register/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
  
  }
  
    render() {
      return (
          
            <div className="row">
            <div className="col-3 reg-form-box">
              <AuthNav/>
              <br/>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="sm-margin" align="right" size="sm">
                  Register
                </Button>
              </Form>
            </div>
            </div>
          
      );
    }
  }
  export default AuthForm;