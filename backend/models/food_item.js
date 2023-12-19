const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  CategoryName: {
    type: String,
    require: true
  }, 
  name: {
    type: String,
    require: true
  },  
  img: {
    type: String,
    require: true
  }, 
  options:  [  ],
  description: {
    type: String
  },
  RestaurantEmail: {
    type: String,
    require: true
  }
});

const FoodItem = mongoose.model('food_item', FoodItemSchema);

module.exports = FoodItem;
