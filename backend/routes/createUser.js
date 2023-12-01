const express = require('express')
const User = require('../models/user_model')
const router = express.Router()

router.post("/createuser", async (req, res) => {
    try {
          await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        createdDate: Date.now()
    } 
    )
    res.json({success: true})
    } catch (error) {
        console.log('error', error)
        res.json({success: true})
    }
  
})

module.exports = router;