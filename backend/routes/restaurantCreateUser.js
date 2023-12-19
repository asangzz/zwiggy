const express = require('express') 
const router = express.Router()
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs') 
const RestaurantUser = require('../models/res_user_model')

router.post("/rcreateuser", 
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
          await RestaurantUser.create({
        name: req.body.name,
        email: req.body.email,
        logo: req.body.logo,
        password: setPassword,
        location: req.body.location,
        open: req.body.open,
        close: req.body.close,
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