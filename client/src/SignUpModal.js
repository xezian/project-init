// Import required packages and components
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SignUp } from './Signup.js';
import logo from './img/bike-gear-icon.png';

// SignUpModal component to be rendered by HeaderNavigation.js
// This component creates a modal that displays the sign up form
// which is created in SignUp component
export class SignUpModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="danger" onClick={this.handleShow} className="modal-btn">
          Sign up
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="text-danger">Sign up</h1>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please fill every field
            </p>
              
              <SignUp handleClose={this.handleClose} />

          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}