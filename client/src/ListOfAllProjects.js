import React, { Component } from 'react';
const $ = require('jquery');

export class ListOfProjects extends Component {
  render() {
    return (
    	<ul>
    		{
    			this.props.projects.map(project => 
    			<li key={project.id}><strong>{project.name}</strong><br />
    				{project.about.slice(0, 40)}...<hr />
    			</li>)
    		}
    	</ul>
  	)
  }
};
