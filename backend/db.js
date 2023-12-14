const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user_model')
  

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)

          mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Other connection options if needed
          });
      
          console.log('Connected to MongoDB');

        
    } catch(error) {
        console.log('-----fetch',error)
        process.exit()
    }
}

module.exports = mongoDB;
