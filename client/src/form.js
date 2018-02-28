import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      about: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.name });
  }

  handleAboutChange(e) {
    this.setState({ about: e.target.about });
  }

  handleSubmit() {
    console.log(this.state.name, this.state.about);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="textarea"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="textarea"
            value={this.state.about}
            onChange={this.handleAboutChange}
          />
        </FormGroup>
          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
      </form>
    );
  }
};
