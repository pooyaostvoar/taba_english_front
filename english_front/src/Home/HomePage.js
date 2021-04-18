import React, { Component } from 'react';

import { Grid } from '@material-ui/core'
import './HomePage.css'
class HomePage extends React.Component {
    
    
    render() {
        
        return (
            <div className="home_main_div">
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