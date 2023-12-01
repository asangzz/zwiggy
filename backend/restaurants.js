const { MongoClient } = require('mongoose'); 
const mongoDB = require('./db');
require('dotenv').config();
 
 const uri = process.env.MONGO_URI; 

const restaurants = async () => {

    const MongoClient = require("mongodb").MongoClient;
    const client = new MongoClient(uri );

    try {
         
        // const fetchedData = await mongoose.connection.db.databaseName("sample_restaurants");
        //   fetchedData.find({}).toArray(function(error, data){
        //     if(error)  console.log('--fetch error',error)
        //     else{console.log(data)}
        // })

           // Access the database and collection

           await client.connect();

    const database = client.db('users');
    const collection = database.collection('sample_restaurants');

    // Fetch data from the collection
    const result = await collection.findOne({});
    //.toArray();

    // Log the fetched data
    console.log('Fetched data:', result);
    } catch(error) {
        console.log('-----fetch',error)
        process.exit()
    }
}

module.exports = restaurants;