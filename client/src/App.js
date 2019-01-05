// Import required packages and components
import React, { Component } from 'react';
import { MapModal } from './createmodal.js';
import MapWithAMarkerClusterer from './tommap.js';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import { HeaderNavigation } from './HeaderNavigation.js';
import { Projects } from './projects.js';
import $ from 'jquery';
import './css/App.css';

// App component to be rendered by index.js 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userID: '',
      username: ''
    };
  }
  checkNamePassword = (name, password) => {
    // console.log("hi "+name+"\n"+"Let's get you logged in")
    // check name and password
    // get our form data out of state
    const data = {
        username: name,
        password: password,
    };
    $.post({
        data: data,
        url: '/api/login/',
        dataType: "json"
    }).then(res => {
        this.setState({
          userID: res.id,
          username: res.username
        });
    })
  }
  render() {
    return (
      <div className="App">
        <HeaderNavigation 
          checkNamePassword = {this.checkNamePassword}
        />
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={8}>
              <Well>
                <MapWithAMarkerClusterer />
              </Well>
            </Col>
            <Col xs={1}></Col>
            <Col xs={10} sm={12} md={4} className="form-div">
              <Projects />
              <MapModal 
                userID={this.state.userID}
                username={this.state.username}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
