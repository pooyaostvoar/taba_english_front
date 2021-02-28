import React, { Component } from 'react';

import {AppBar, Toolbar, Typography, IconButton, Button, Grid} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import MenuBar from '../common/MenuBar'
import app_logo from '../common/app_logo.jpg'
import RegisterationForm from './RegisterationForm'
import './RegistrationPage.css'
class RegistrationPage extends React.Component {
    
    
    render() {
        
        return (
            <div className="main_div">
                <MenuBar/>
                <RegisterationForm/>
            </div>
    );
    }
  }
  export default RegistrationPage;