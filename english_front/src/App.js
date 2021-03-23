import './App.css';

import HomePage from './Home/HomePage'
import RegistrationPage from './Auth/RegisterationPage'
import LoginPage from './Auth/LoginPage'
import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import VideoPage from './Video/VideoPage';


function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/Home" component={HomePage} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Register" component={RegistrationPage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route path="/video/:id" component={VideoPage}/>
        </Switch>
      </Router>

  );
}

export default App;
