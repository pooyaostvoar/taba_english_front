
import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {postReq} from './RequestMaker'
const mapStateToProps = (state, ownProps) => {
    let username = '';
    let buttonName = '';
    let buttonHref = '';
    if(state.user.username){
        username = state.user.username;
        buttonName = 'logout';
        buttonHref = '';
    }
    else{
        buttonName = 'register';
        buttonHref = '/register';
    }
    return {
        username,
        buttonName,
        buttonHref
    }
};
class MenuBar extends React.Component {
    clickOnButton = () => {
        const successFunc = (data) => {
            console.log(data);
            this.props.dispatch({ type: 'logout' });
            window.location.href = '/';
        }
        if(this.props.buttonName == 'logout'){
            let reqProps = {
                data : {},
                url : '/auth/logout/',
                successFunc : successFunc 
            }
            postReq(reqProps);
        }
        
    };
    render() {    
        return (
            <div className="row">
                <div className="col-sm-12">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">Taba English</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#aboutus">About us</Nav.Link>
                        <Nav.Link href="#videos">Videos</Nav.Link>
                    </Nav>
                    
                    <Button variant="outline-light" href={this.props.buttonHref} onClick={this.clickOnButton}>
                        {this.props.buttonName}
                    </Button>
                </Navbar>
                </div>
            </div>    
    );
    }
  }
  export default connect(mapStateToProps)(MenuBar);