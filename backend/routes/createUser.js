const express = require('express')
const User = require('../models/user_model')
const router = express.Router()
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs') 

router.post("/createuser", 
body('email').isEmail(),
body('name').isLength({min:5}),
body('password').isLength({min:5})
,async (req, res) => {
    const errors = validationResult(req)
    ;
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const salt = await bcrypt.genSalt(10)
    let setPassword = await bcrypt.hash( req.body.password,salt)

    try {
          await User.create({
        name: req.body.name,
        email: req.body.email,
        password: setPassword,
        location: req.body.location,
        createdDate: Date.now()
    } 
    )
    res.json({success: true})
    } catch (error) {
        console.log('error', error)
        res.json({success: false})
    }
  
})

module.exports = router;