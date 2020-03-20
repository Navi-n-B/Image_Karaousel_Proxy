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

let carousel = mongoose.model('Listing', listingSchema);

let getImage = (listingNumber, callback) => {
  Listing.
    find({listingNumber}).
    exec(callback)
}

module.exports.getListing = getListing;
module.exports.Listing = Listing;