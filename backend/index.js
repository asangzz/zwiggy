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
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Add PUT here
  next();
})

mongoDB(); 
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(express.json())

const { swaggerServe, swaggerSetup } = require('./config')
  
app.get("/",(res,resp)=>{ 
    resp.send('results'); 
});

app.use("/api-docs", swaggerServe, swaggerSetup);

app.use('/api', require("./routes/createUser"))
app.use('/api', require("./routes/verifyUser"))
app.use('/api', require("./routes/users"))

app.use('/api', require("./routes/createcategory"))
app.use('/api', require("./routes/foodCategory"))
app.use('/api', require("./routes/createFoodItem")) 
app.use('/api', require("./routes/editFoodItem"))
app.use('/api', require("./routes/foodItem")) 
app.use('/api', require("./routes/foodId")) 
app.use('/api', require("./routes/foodItemId")) 
app.use('/api', require("./routes/orderData")) 
app.use('/api', require("./routes/RestaurantOrderData"))  
app.use('/api', require("./routes/restaurantCreateUser"))
app.use('/api', require("./routes/restaurantVerifyUser"))
app.use('/api', require("./routes/restaurantusers"))
app.use('/api', require("./routes/restaurantusersId"))
app.use('/api', require("./routes/updateOrderConfirmation"))

app.listen(4000)

 