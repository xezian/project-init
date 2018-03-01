import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserForm } from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          some text here about projection submission requirements
        </p>
        <UserForm />
      </div>
    );
  }
}



export default App;
