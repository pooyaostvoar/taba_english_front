import React, { Component } from 'react';
import AuthForm from './AuthForm'
import './RegistrationPage.css'
class RegistrationPage extends React.Component {
    
    
    render() {
        
        return (
            <div className="main_div">
                <AuthForm formType="registeration" />
            </div>
    );
    }
  }
  export default RegistrationPage;