const mongoose = require('mongoose');

const { Schema } = mongoose;

const RestaurantUserSchema = new Schema({
  name: {
    type: String,
    required: true
  }, email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  open: {
    type: String,
    required: true
  },
  close:{
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const RestaurantUser = mongoose.model('RestaurantUser', RestaurantUserSchema);

module.exports = RestaurantUser;
