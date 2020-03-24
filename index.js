import React from "react";
import ReactDOM from "react-dom";
import App from './src/App.jsx';
import './static/style.scss';
ReactDOM.render(<App />, document.getElementById("app-container"))

const aws = require('aws-sdk');
const config = require ('./config.json');

(async function() {
  try {

    aws.config.setPromiseDependency();
    aws.config.update({
      accessKeyId: config.aws.accessKey,
      secretAccessKey: config.aws.secretKey,
      region: 'us-east-1'
      // GIT-IGNORE THIS IF HARDCODED INTO A FILE
    });

    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'hrr44-navi-photos'
    }).promise();
  }

  catch (err) {
    console.log('Error:', err);
  }
})();