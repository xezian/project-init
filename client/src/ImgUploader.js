import React from 'react';
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
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>_handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>_handleUpload(e)}>Upload Image</button>
          </div>
        </div>
      )
    }
  };
  export default ImgUploader;