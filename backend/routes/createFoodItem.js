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
    //       await FoodItem.create({
    //     CategoryName: req.body.CategoryName,
    //     name: req.body.name, 
    //     img: req.body.img,
    //     option: req.body.option,
    //     description: req.body.description,
    //     RestaurantEmail: req.body.RestaurantEmail
    // } 
    // )
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