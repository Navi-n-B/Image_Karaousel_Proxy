const express = require('express');
const app = express();
const {getItem} = require('../database/data.js');
const port = 3005; // Childish Gambino

let gallery = 'hrr44-navi-photos';

app.use(express.static(__dirname + '/../dist/bundle.js'));

app.get('../api.js', function (req, res) {
  getItem(44, function(err, result) {
    if (err) {
      console.log('Image retrieval unsuccessful.')
    } else {
      res.send(result)
    }
  });
});

app.listen(port, function() {
  console.log(`Server is now listening on port ${port}`);
});