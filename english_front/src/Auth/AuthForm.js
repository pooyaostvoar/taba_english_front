import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AuthForm.css'
import AuthNav from './AuthNav';
import {connect} from 'react-redux';
import {postReq} from '../Common/RequestMaker'


class AuthForm extends React.Component {
    constructor(props) {
      super(props);
      if(props.formType == 'registeration')
      {
        this.submitButtonVal = 'register';
      }
      else
      {
        this.submitButtonVal = 'login';
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
        
        
        let reqUrl = '';
        if(this.props.formType == 'registeration'){
          reqUrl = '/auth/register/'; 
        }
        else if(this.props.formType == 'login'){
          reqUrl = '/auth/login/'; 
        }
        
        const successFunc = reqUrl => { 
          const f = data => {
            if(reqUrl === '/auth/login/'){
              this.props.dispatch({ type: 'login', payload:{ user:data } })
            }
            window.location.href = '/'; 
          };
          return f;
        }
        
        let reqProps = {
          data : reqBody,
          url : reqUrl,
          successFunc : successFunc(reqUrl)
        }
        postReq(reqProps);

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
                  {this.submitButtonVal}
                </Button>
              </Form>
            </div>
            </div>
          
      );
    }
  }
  export default connect(null, null)(AuthForm);