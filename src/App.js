import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import socketIOClient from 'socket.io-client'


import logo from './logo.svg';
import './App.css';

import Home from './Home/Home'
import Header from './Header/Header'
import NotFound from './NotFound/NotFound'

import StatCardHospital from './StatCard/StatCardHospital'
import HomeSearchCountry from './Home/HomeSearchCountry'
import Notification from './Notification/Notification'
import Login from './Auth/Login';
import Register from './Auth/Register'
import Analytics from './Analytics/Analytics'

function App() {

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
            <Route exact path='/home' component={Home} />
            <Route exact path='/hospital' component={StatCardHospital} />
            <Route exact path='/search' component={HomeSearchCountry} />
            <Route exact path='/notification' render={(props) => <Notification socket = {socket}/>} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/Analytics' component={Analytics} />
            <Route component={NotFound} />
          </Switch>
        </ToastProvider>
      </Router>

    </div>

  );
}

export default App;
