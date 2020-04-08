import React, { useContext, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import socketIOClient from 'socket.io-client'


import logo from './logo.svg';
import './App.css';
import { store } from './Store/store'

import Home from './Home/Home'
import FirstPage from './Home/FirstPage'
import Header from './Header/Header'
import NotFound from './NotFound/NotFound'

import StatCardHospital from './StatCard/StatCardHospital'
import HomeSearchCountry from './Home/HomeSearchCountry'
import Notification from './Notification/Notification'
import Login from './Auth/Login';
import Register from './Auth/Register'
import Analytics from './Analytics/Analytics'
import Profile from './Profile/Profile'

import OLoginCallback from './Auth/OAuth/OLoginCallback'
import Auth0Login from './Auth/Auth0/Auth0Login'
import PrivateRoute from './Auth/Auth0/PrivateRoute'

function App() {
  const { state } = useContext(store);


  let endpoint = 'http://127.0.0.1:3001'
  let userId = Math.random(0, 100);
  let query = `userId=${userId}`;

  const socket = socketIOClient(endpoint, { 'query': query });

  return (
    <div>
      <Router>
        <ToastProvider>
          <Header />
          <Switch>
            <PrivateRoute path='/home' component={Home} />
            <Route path='/' component={FirstPage} />
            <Route exact path='/hospital' component={StatCardHospital} />
            <Route exact path='/search' component={HomeSearchCountry} />
            <Route exact path='/notification' render={(props) => <Notification socket={socket} />} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Analytics' component={Analytics} />
            <Route exact path='/oauth_callback' component={OLoginCallback} />
            <Route exact path='/auth0/login' component={Auth0Login} />
            <Route exact path='/profile' component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </ToastProvider>
      </Router>

    </div>

  );
}

export default App;
