import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import routes from './routes';
// define styles above the class component 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { routes }
      </div>
    );
  }
}

export default App;
