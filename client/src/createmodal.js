import React from 'react';
import { Button, Popover, Tooltip, Modal, OverlayTrigger, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { CreateProjectForm } from './project-form.js';
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

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow} className="modal-btn">
          Launch Map Modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <img src={logo} className="App-logo" alt="logo" />
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <h3>Create a Project</h3>
            <p>
              Please select a category that best describes your project.
            </p>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel></ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="1">Lighting</option>
                  <option value="2">Intersections</option>
                  <option value="3">Road Conditions</option>
                  <option value="4">Road Crossing</option>
                  <option value="5">Route Proposal</option>
                </FormControl>
              </FormGroup>
            <hr />
            <h4>Tell us about your project!</h4>
            <p>
             Please choose a project name that is brief and concise.
            </p>
            <CreateProjectForm />
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit" onClick={this.onSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
