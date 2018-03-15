import React from 'react';
import { Button, FormGroup } from 'react-bootstrap';

class ImgUploader extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let _handleImageChange = this.props._handleImageChange;
      let _handleUpload = this.props._handleUpload
      return (
        <div className="previewComponent">
          <div>
            <input className="bg-primary btn-sm"
              type="file"
              onChange={(e)=>_handleImageChange(e)} />
            <button className="btn btn-primary btn-sm"
              type="submit" id="img-upload"
              onClick={(e)=>_handleUpload(e)}>Upload Image</button>
          </div>
        </div>
      )
    }
  };
  export default ImgUploader;