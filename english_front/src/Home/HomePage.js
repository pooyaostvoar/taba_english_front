import React, { Component } from 'react';

import {AppBar, Toolbar, Typography, IconButton, Button, Grid} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import MenuBar from '../common/MenuBar'
import app_logo from '../common/app_logo.jpg'
import './HomePage.css'
class HomePage extends React.Component {
    
    
    render() {
        
        return (
            <div className="home_main_div">
                <MenuBar/>
                <div className="body_div">
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    color="#ffffff"
                    >this is taba english site </Grid>
                </div>
            </div>
    );
    }
  }
  export default HomePage;