import React, { Component } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import $ from 'jquery';

export class CreateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        about: '',
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
      // get our form data out of state
      const data = {
        name: this.state.name,
        about: this.state.about,
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
      const { name, about } = this.state;
      return (
        <form>
          <FormGroup>
            <input id="projectNameField" type="text" name="name" placeholder="project name" value={name} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <textarea id="projectAboutField" type="text" name="about" placeholder="about" value={about} onChange={this.onChange}></textarea>
          </FormGroup>
        </form>
      );
    }
  }
