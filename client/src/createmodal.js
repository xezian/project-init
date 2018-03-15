// Import required packages and components
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CreateProjectForm } from './CreateProject-form.js';
import logo from './img/bike-gear-icon.png';

// MapModal component to be rendered by App.js
export class MapModal extends React.Component {
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
        <Button bsStyle="danger" bsSize="large" onClick={this.handleShow} id="modal-btn">
          Create a Project!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="text-danger">Create a Project</h1>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateProjectForm
              handleClose={this.handleClose}
              userID={this.props.userID}
              username={this.props.username}
             />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}