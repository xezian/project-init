import React, { Component } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import $  from 'jquery';

export class UserForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        about: '',
        city: '',
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
        city: this.state.city
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
      const { name, about, city } = this.state;
      return (
        <form>
          <FormGroup>
          <input type="text" name="name" placeholder="name" value={name} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
          <input type="text" name="about" placeholder="about" value={about} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
          <input type="text" name="city" placeholder="city" value={city} onChange={this.onChange} />
          </FormGroup>
          <Button bsStyle="primary" type="submit" onClick={this.onSubmit}>Submit</Button>
        </form>
      );
    }
  }
