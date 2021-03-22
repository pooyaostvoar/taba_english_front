import React, { Component } from 'react';
import MenuBar from '../Common/MenuBar'
import AuthForm from './AuthForm'
import './RegistrationPage.css'
class RegistrationPage extends React.Component {
    
    
    render() {
        
        return (
            <div className="main_div">
                <MenuBar/>
                <AuthForm/>
            </div>
    );
    }
  }
  export default RegistrationPage;