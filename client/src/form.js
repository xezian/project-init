import React, { Component } from 'react';
import $ from 'jquery';

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
      const data = JSON.stringify({ 
        name: this.state.name, 
        about: this.state.about, 
        city: this.state.city 
      });
      console.log(data);
      $.ajax({
        url: "http://localhost:3030/api/projects",
        type: "POST",
        data: data
      }).then((result) => {
        console.log(result);
      });
    }

    render() {
      const { name, about, city } = this.state;
      return (
        <form>
          <input type="text" name="name" value={name} onChange={this.onChange} />
          <input type="text" name="about" value={about} onChange={this.onChange} />
          <input type="text" name="city" value={city} onChange={this.onChange} />
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </form>
      );
    }
  }