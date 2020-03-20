import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Home from './Home/Home'
import Header from './Header/Header'
import NotFound from './NotFound/NotFound'

import StatCardHospital  from './StatCard/StatCardHospital'
import HomeSearchCountry from './Home/HomeSearchCountry'
import Notification from './Notification/Notification'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/hospital' component={StatCardHospital} />
          <Route exact path='/search' component={HomeSearchCountry} />
          <Route exact path='/notification' component={Notification} />
          <Route component={NotFound} />
        </Switch>

      </Router>

    </div>

  );
}

export default App;
