import React, { Component } from 'react';
import AuthForm from './AuthForm'
import './RegistrationPage.css'
class LoginPage extends React.Component {
    
    
    render() {
        
        return (
            <div className="main_div">
                <AuthForm formType="login" />
            </div>
    );
    }
  }
  export default LoginPage;