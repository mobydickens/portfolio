import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
// define styles above the class component 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
