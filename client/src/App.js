import React, { Component } from 'react';
import logo from './bike-gear-icon.png';
import './App.css';
import { CreateProjectForm } from './project-form.js';
import { MapModal } from './createmodal.js';
import MapWithAMarkerClusterer from './tommap.js';
import { Grid, Col, Row, Well } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Project Initiative</h1>
        </header>
        <p className="App-intro">
        </p>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={8}>
              <Well><MapWithAMarkerClusterer /></Well>
            </Col>
            <Col xs={1} sm={2}></Col>
            <Col xs={10} sm={8} md={4} className="form-div">
              <CreateProjectForm />
              <br />
              <hr />
              <MapModal />
            </Col>
            <Col xs={1} sm={2}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}



export default App;
