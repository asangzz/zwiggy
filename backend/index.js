const express = require('express')
const app = express()
 
const mongoDB = require('./db');
// const restaurants = require('./restaurants');

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

mongoDB(); 
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(express.json())

app.use('/api', require("./routes/createUser"))
app.use('/api', require("./routes/verifyUser"))
app.use('/api', require("./routes/users"))

app.use('/api', require("./routes/createcategory"))
app.use('/api', require("./routes/foodCategory"))
app.use('/api', require("./routes/createfooditem")) 
app.use('/api', require("./routes/foodItem")) 

app.listen(4000)

 