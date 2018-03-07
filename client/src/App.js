import React, { Component } from 'react';
import './App.css';
import { CreateProjectForm } from './CreateProject-form.js';
import { MapModal } from './createmodal.js';
import MapWithAMarkerClusterer from './tommap.js';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import { HeaderNavigation } from './HeaderNavigation.js'
import { SignUp } from './Signup.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavigation />
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
