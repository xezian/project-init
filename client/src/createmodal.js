import React from 'react';
import { Button, Popover, Tooltip, Modal, OverlayTrigger, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { CreateProjectForm } from './CreateProject-form.js';
import logo from './bike-gear-icon.png';

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
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

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
             />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}