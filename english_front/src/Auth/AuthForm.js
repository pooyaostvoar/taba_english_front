import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css'
import AuthNav from './AuthNav';
class AuthForm extends React.Component {
    constructor(props) {
      super(props);
      if(props.navType == 'registeration'){
        this.defaultActiveKey = '/register';
      }
      else if(props.navType == 'login'){
        this.defaultActiveKey = '/login';
      }
    }
  
    sendAuthReq = (event) => {
        event.preventDefault();
        let email = document.getElementById("formBasicEmail").value;
        let password =  document.getElementById("formBasicPassword").value;
        const reqBody = {
          email: email, 
          password: password
        };
        
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reqBody)
        };
        
        let reqUrl = '';
        if(this.props.formType == 'registeration'){
          reqUrl = '/auth/register/'; 
        }
        else if(this.props.formType == 'login'){
          reqUrl = '/auth/login/'; 
        }
        
        fetch(reqUrl, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
  
    }
    
    render() {
      return (
            <div className="row">
            <div className="col-3 reg-form-box">
              <AuthNav navType={this.props.formType}/>
              <br/>
              <Form onSubmit={this.sendAuthReq}>
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