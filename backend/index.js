const express = require('express')
const app = express()

const mongoDB = require('./db')

mongoDB();
app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(4000)