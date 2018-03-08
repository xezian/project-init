import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './bike-gear-icon.png';
import { SignUpModal } from './SignUpModal.js'
import { LoginModal } from './LoginModal.js'

export class HeaderNavigation extends React.Component {
  render() {
    return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      <h1>SHFTR</h1>
      </Nav>
      <div id="nav-btn">
       <SignUpModal />
       <LoginModal />
      </div>
    </Navbar>
    );
  }
}
