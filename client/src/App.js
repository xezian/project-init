import React, { Component } from 'react';
import './App.css';
import { CreateProjectForm } from './CreateProject-form.js';
import { MapModal } from './createmodal.js';
import MapWithAMarkerClusterer from './tommap.js';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import { HeaderNavigation } from './HeaderNavigation.js';
import { Projects } from './projects.js';
import $ from 'jquery';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
  $.ajax({
      method: 'GET',
      url: '/api/userlog',
    }).then(res => {
      this.setState({ user: res });
    });
  }
  render() {
    return (
      <div className="App">
        <HeaderNavigation />
        <h1>{this.state.user}</h1>
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={8}>
              <Well><MapWithAMarkerClusterer /></Well>
            </Col>
            <Col xs={1} sm={2}></Col>
            <Col xs={10} sm={8} md={4} className="form-div">
              <Projects />
              	 <MapModal />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
