import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/about' component={ About }/>
    <Route path='/skills' component={ Skills }/>
    <Route path='/projects' component={ Projects }/>
    <Route path='/contact' component={ Contact }/>
  </Switch>
)