const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const photoBucket = 'hrr44-navi-photos';

const s3 = new AWS.S3();

for (var i = 1; i <= 124; i++) {

  let oneShot = `../hrr44-navi-photos/images${i}.jpeg`;
  const uploadFile = (filename) => {
    const fileContent = fs.readFileSync(filename);

    const params = {
      Bucket: photoBucket,
      Key: `id${counter}/images${i}.jpeg`,
      ContentType: 'image/jpeg',
      Body: fileContent
    };

    s3.upload(params, function(err, data) {
      if (err) {throw err;}
      else {
        console.log(`File uploaded successfully at ${data.Location}`);
      }
    });
  }
  uploadFile(oneShot);
}