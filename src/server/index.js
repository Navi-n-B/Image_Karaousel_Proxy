const express = require('express');
const app = express();
const {getItem} = require('../database/data.js');
const port = 3005; // Childish Gambino

let gallery = 'hrr44-navi-photos';

app.use(express.static(__dirname + '/../dist'));

// tests functionality
app.get('../api.js', function (req, res) {
  getItem(87, function(err, result) {
    if (err) {
      console.log('Image retrieval unsuccessful.')
    } else {
      res.send(result)
    }
  });
});

app.listen(port, function() {
  console.log(`Server is now listening on port ${port}.`);
});