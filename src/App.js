import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
// define styles above the class component 

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
