import React, { Component } from 'react';
const $ = require('jquery');

export class ListOfProjects extends Component {
  render() {
    return (
    	<ul>
    		{
    			this.props.projects.map(project => 
    			<li key={project.id}>{project.name}<br />
    				{project.about}<hr />
    			</li>)
    		}
    	</ul>
  	)
  }
};
