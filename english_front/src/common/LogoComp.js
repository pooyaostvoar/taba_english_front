
import React, { Component } from 'react';
import './LogoComp.css';
import {appData} from '../AppData'
import logo_img from './app_logo.jpg'
import {Box} from '@material-ui/core'
import { width, height } from '@material-ui/system';
class Logo extends React.Component {
    render() {
      return (
        <div>
            <img src={logo_img} width="100%" height="100%"></img>
        </div>
    );
    }
  }
export default Logo;