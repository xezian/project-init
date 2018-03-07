import React, { Component } from 'react';
const $ = require('jquery');

class ListOfProjects extends Component {
  render() {
    return <ul>{this.props.projects.map(project =>
            <li key={project.id}>{project.name}
            </li>
        )}</ul>;
  }
};
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
        console.log(res);
        this.setState({ projects: res });
      });
    }
  render() {
    return (
            <div>
                <h1>All Projects</h1>
                <ListOfProjects
                    projects={this.state.projects}
                />
            </div>
        );
  }
}
