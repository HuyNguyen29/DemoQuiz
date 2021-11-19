import React from "react";
import PropTypes from "prop-types";
import Resumable from "resumablejs";

class ResumableJs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let resumableComponent = new Resumable({
      target: `https://videoservice.disprz.com/v1/videos/multipart/upload`,
      testChunks: this.props.testChunks || false,
      withCredentials: this.props.withCredentials || false,
      chunkSize: this.props.chunkSize,
      prioritizeFirstAndLastChunk: true,
      simultaneousUploads: this.props.simultaneousUploads,
    });
    if (this.props.browseElement) {
      resumableComponent.assignBrowse(this.props.browseElement);
    }
    resumableComponent.on("fileAdded", this.onFileAdded);
    resumableComponent.on("fileSuccess", this.onUploadSuccess);
    resumableComponent.on("progress", this.onUploadProgress);
    resumableComponent.on("pause", this.onPause);
    resumableComponent.on("cancel", this.onCancel);
    resumableComponent.on("fileError", this.onUploadError);
    this.resumableComponent = resumableComponent;
  }

  onFileAdded = (file) => {
    console.log(`%c file`, "color: blue; font-weight: 600", file);
    const params = { fileName: file.fileName };
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "a3a764b7d310151d193116091c038c0eb471ec8b268dd0c6352a78f5ea8f84ca",
      },
      body: JSON.stringify(params),
    };
    fetch("https://videoservice.disprz.com/v1/videos/multipart/create", request)
      .then((response) => response.json())
      .then((data) => {
        this.resumableComponent.defaults.headers = {
          "x-upload-token": data.uploadToken,
        };
        this.resumableComponent.upload();
      });
  };
  onUploadSuccess = (file, message) => {
    this.resumableComponent.removeFile(file); // on success removing the file from queue, so that it will allow to upload same file;
    let request = {
      method: "GET",
      headers: this.resumableComponent.defaults.headers,
    };
    fetch(
      `https://videoservice.disprz.com/v1/videos/multipart/complete`,
      request
    )
      .then((response) => response.json())
      .then((data) => {
        this.props.onUploadComplete(data);
        alert(JSON.stringify(data));
        this.cancel();
      });
  };
  onUploadProgress = (file) => {
    let percentage = Math.floor(this.resumableComponent.progress() * 100);
    console.log(`%c percentage`, "color: blue; font-weight: 600", percentage);
    this.props.onUploadProgress(percentage);
  };
  onUploadError = (file, message) => {
    this.resumableComponent.removeFile(file);
    this.props.onUploadError(JSON.parse(message));
  };
  onUploadStart = () => {
    this.props.onUploadStart();
  };
  onPause = () => {
    this.props.onPause();
  };
  onCancel = () => {
    this.props.onCancel();
    let request = {
      method: "GET",
      headers: this.resumableComponent.defaults.headers,
    };
    fetch(`https://videoservice.disprz.com/v1/videos/multipart/abort`, request);
  };
  addFile = (file) => {
    this.resumableComponent.addFile(file);
  };
  pause = () => {
    this.resumableComponent.pause();
  };
  cancel = () => {
    this.resumableComponent.cancel();
  };

  render() {
    return null;
  }
}

ResumableJs.defaultProps = {
  simultaneousUploads: 3,
  chunkSize: 5 * 1024 * 1024,
  onUploadStart: () => {},
  onFileAdded: () => {},
  onPause: () => {},
  onUploadComplete: () => {},
  onUploadSuccess: () => {},
  onUploadError: () => {},
  onCancel: () => {},
  onUploadProgress: () => {},
};
ResumableJs.ErrorCodes = {
  MaliciousFile: 1000,
  MultipleExtension: 1001,
  EmptyContextType: 1002,
  EmptyContextId: 1003,
};
export default ResumableJs;
