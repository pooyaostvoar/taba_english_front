import './App.css';

import HomePage from './Home/HomePage'
import RegistrationPage from './Auth/RegisterationPage'
import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    
      <Router>
      <Switch>
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Register" component={RegistrationPage} />
      </Switch>
      </Router>

  );
}

export default App;
