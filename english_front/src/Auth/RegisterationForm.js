import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './RegisterationForm.css'
class RegisterationForm extends React.Component {
    constructor(props) {
      super(props);
      
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="container reg-form-container">
            <div className="row reg-form-row">
            <div className="col-12">
              <Form >
                <Form.Group controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="sm-margin" size="sm">
                  Login/Register
                </Button>
              </Form>
            </div>
            </div>
          </div>
      );
    }
  }
  export default RegisterationForm;