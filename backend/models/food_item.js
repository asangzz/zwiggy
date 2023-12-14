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
  options:[{
    varient:{
      varientname: String,
      varientprice: Number
    }
  }],
  description: {
    type: String
  }
});

const FoodItem = mongoose.model('food_item', FoodItemSchema);

module.exports = FoodItem;
