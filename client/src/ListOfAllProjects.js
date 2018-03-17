// Import required packages and components
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import logo from './img/bike-gear-icon.png';

// ListOfProjects component to be rendered by Projects.js
// This component makes a list of all saved projects
export class ListOfProjects extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      projectName: '',
      projectAbout: ''
    };
  }

  handleClose() {
    this.setState({ 
      show: false,
      projectName: '',
      projectAbout: '' 
    });
  }

  handleShow(name, about) {
    this.setState({ 
      show: true,
      projectName: name,
      projectAbout: about
    });
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.props.projects.map(project => 
                <li className="list" key={project.id} onClick={() => this.handleShow(project.name, project.about)}>
                  <span>{project.name}</span><br />
                  <span>{project.about.slice(0, 40)}...</span>
                </li>
            )
          }
        </ul>
        
        <Modal show={this.state.show} onHide={this.handleClose} id="project-view">
          <Modal.Header closeButton>
            <Modal.Title>
            <div className="text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="text-danger">{this.state.projectName}</h2></div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <p>{this.state.projectAbout}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose} className="btn-danger">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
};