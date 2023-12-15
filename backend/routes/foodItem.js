 
const express = require('express')
const router = express.Router()  
const FoodItem = require('../models/food_item');
const Category = require('../models/food_category');

router.get("/fooditem", async (req, res) => { 
    try { 
        
        try {
            const foodItem = await FoodItem.find({}) 
            global.food_items = foodItem
          } catch (err) {
            console.log("FoodItemError",err)
          }

          try {
            const foodCategory = await Category.find({}) 
            global.food_category = foodCategory
          } catch (err) {
            console.log("categoryError",err)
          }
        return res.send([global.food_items, global.food_category] )

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

