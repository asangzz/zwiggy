const express = require('express')
const app = express()

// const mongoDB = require('./db');
// const restaurants = require('./restaurants');

// mongoDB(); 
app.get('/', (req, res) => {
  res.send('hello world')
})

// app.use(express.json())
// app.use('/api', require("./routes/createUser"))


app.listen(4000)