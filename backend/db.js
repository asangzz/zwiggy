const mongoose = require('mongoose');
require('dotenv').config(); 
const FoodItem = require('./models/food_item');
const Category = require('./models/food_category');
  

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)

          mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
          });
      
          console.log('Connected to MongoDB');

        

          
           
            
           
 
         
        
    } catch(error) {
        console.log('-----fetch',error)
        process.exit()
    }
}

module.exports = mongoDB;
