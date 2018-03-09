import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './bike-gear-icon.png';
import { SignUpModal } from './SignUpModal.js'
import { LoginModal } from './LoginModal.js'

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
       <LoginModal />
      </div>
    </Navbar>
    );
  }
}
