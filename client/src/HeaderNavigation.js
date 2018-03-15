// Import required packages and components
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { SignUpModal } from './SignUpModal.js';
import { LoginModal } from './LoginModal.js';
import logo from './img/bike-gear-icon.png';

// HeaderNavigation component to be rendered by App.js
export class HeaderNavigation extends React.Component {
  render() {
    return (
    <Navbar>
      <Navbar.Header id="nav">
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </Navbar.Header>
      <h1 id="brand">SHFTR</h1>
      <div id="nav-btn">
        <SignUpModal />
        <LoginModal 
          checkNamePassword = {this.props.checkNamePassword}
        />
      </div>
    </Navbar>
    );
  }
}
