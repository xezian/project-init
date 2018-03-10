import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UserLogin } from './UserLogin.js';
import logo from './bike-gear-icon.png';

export class LoginModal extends React.Component {
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
        <Button id="login-btn" onClick={this.handleShow} className="modal-btn">
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
            <div className="text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="text-danger">Login</h1></div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please fill every field
            </p>
              
            <UserLogin 
              checkNamePassword = {this.props.checkNamePassword}
              handleClose = {this.handleClose}
            />

          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}