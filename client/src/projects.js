import React, { Component } from 'react';
import { ListOfProjects } from './ListOfAllProjects.js'
const $ = require('jquery');

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    $.ajax({
        method: 'GET',
        url: '/api/projects',
      }).then(res => {
        this.setState({ projects: res });
      });
    }
    
  render() {
    return (
      <div>
        <h2 className="text-danger">Top Ranked Projects</h2>
        <ListOfProjects
          projects={this.state.projects}
        />
      </div>
    );
  }
}
