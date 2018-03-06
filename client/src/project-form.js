import React, { Component } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import ImgUploader from './ImgUploader.js';
import $  from 'jquery';

export class CreateProjectForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        about: '',
        file: '',
        imagePreviewUrl: ''
      };
      this._handleUpload = this._handleUpload.bind(this);
      this._handleImageChange = this._handleImageChange.bind(this);
    }

    _handleUpload(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)
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
        project_img_url: this.state.imagePreviewUrl
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
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className="imgTime" src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Select Image</div>);
      }
      return (
        <form>
          <FormGroup>
            <input id="projectNameField" type="text" name="name" placeholder="project name" value={name} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <textarea id="projectAboutField" type="text" name="about" placeholder="about" value={about} onChange={this.onChange}></textarea>
          </FormGroup>
          <FormGroup>
            <ImgUploader 
              _handleImageChange = {this._handleImageChange}
              _handleUpload = {this._handleUpload}
            />
          </FormGroup>
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <Button bsStyle="primary" className="submitButton" type="submit" onClick={this.onSubmit}>Submit New Project</Button>
        </form>
      );
    }
  }
