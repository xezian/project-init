import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import $ from 'jquery';

export class CreateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        about: '',
	category: '',
      };
    }

    onChange = (e) => {
      // Because we named the inputs to match their corresponding values in state, it's
      // super easy to update the state
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    onSubmit = (e) => {
      e.preventDefault();
      // get our form data out of state NOTE: VALUE from form becomes Category so we can send to database
      const data = {
        name: this.state.name,
        about: this.state.about,
	category: this.state.category,
	latitude: this.state.latitude,
	longitude: this.state.longitude,      
      };
      console.log(data);
      $.post({
        url: "/api/projects",
        data: data,
        dataType: 'json'
      }).then((result) => {
        console.log(result);
      });
    }

    render() {
      const { name, about, category } = this.state;
      return (
        <form>
	      <h2 className="text-danger">Create a Project</h2>
	      <FormGroup controlId="formControlsSelect">
	      <ControlLabel>Select a Category</ControlLabel>
	      <FormControl componentClass="select" placeholder="select" name="category" value={this.optionsState} onChange={this.onChange}>
	      <option value="select">select</option>
	      <option value="Lighting">Lighting</option>
	      <option value="Intersections">Intersections</option>
	      <option value="Road Conditions">Road Conditions</option>
	      <option value="Road Crossing">Road Crossing</option>
	      <option value="Route Proposal">Route Proposal</option>
	      </FormControl>
	      <hr />
	      <h4>Tell us about your project!</h4>
	      <p>
	      Please choose a project name that is brief and concise.
	      </p>

            <input id="projectNameField" type="text" name="name" placeholder="project name" value={name} onChange={this.onChange} />
            <textarea id="projectAboutField" type="text" name="about" placeholder="about" value={about} onChange={this.onChange}></textarea>
          </FormGroup>
          <Button bsStyle="danger" type="submit" onClick={this.onSubmit}>Submit New Project</Button>
        </form>
      );
    }
  }
