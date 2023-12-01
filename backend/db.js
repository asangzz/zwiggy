const mongoose = require('mongoose');
require('dotenv').config();
  

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI) 
        console.log('Mongo connected')

        



        
    } catch(error) {
        console.log('-----fetch',error)
        process.exit()
    }
}

module.exports = mongoDB;
