const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/navinbcarousel');

let imageSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  photo: {
    data: Buffer,
    contentType: String
  }
  title: String,
  description: String
});

let carousel = mongoose.model('Stay', staySchema);

let getImage = (stayNumber, callback) => {
  Stay.
    find({stayNumber})
    .exec(callback)
}

module.exports.getStay = getStay;
module.exports.Stay = Stay;
