import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import Parks from './pages/Parks';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/parks' exact component={Parks} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
