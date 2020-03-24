const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hrr44-navi-photo');

let carouselSchema = mongoose.Schema({
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

let Carousel = mongoose.model('Carousel', carouselSchema);

let getCarousel = (id, callback) => {
  Carousel.
    find({id}).
    exec(callback)
}

module.exports.getCarousel = getCarousel;
module.exports.Carousel = Carousel;