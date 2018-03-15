// Import required packages and components
import React, { Component } from 'react';
import { ListOfProjects } from './ListOfAllProjects.js';
import $ from 'jquery';

// Projects component to be rendered by App.js
// This component brings all listed projects into the project view table
// Selected project is displayed on modal
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
