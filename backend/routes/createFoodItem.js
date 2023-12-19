const express = require('express') 
const router = express.Router()
const {body, validationResult} = require('express-validator')
const FoodItem = require('../models/food_item')

router.post("/createfooditem",  
body('name').isLength({min:5})
,async (req, res) => {
    const errors = validationResult(req)
    ;
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    
    try {
    
    const newFoodItem = new FoodItem(req.body);

    // Save the new food item to the database
    await newFoodItem.save();

    res.json({success: true})
    } catch (error) {
        console.log('error', error)
        res.json({success: false})
    }
  
})

module.exports = router;