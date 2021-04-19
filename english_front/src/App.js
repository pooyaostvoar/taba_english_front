import './App.css';
import {store} from './Store'
import HomePage from './Home/HomePage'
import RegistrationPage from './Auth/RegisterationPage'
import LoginPage from './Auth/LoginPage'
import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import VideoPage from './Video/VideoPage';
import { Provider } from "react-redux";
import MenuBar from './Common/MenuBar'

store.subscribe(() => console.log(store.getState()))

function App() {  
  return (
    <Provider store={store}>
      <MenuBar/>
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
    </Provider>

  );
}

export default App;
