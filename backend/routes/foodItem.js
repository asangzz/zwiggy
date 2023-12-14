 
const express = require('express')
const router = express.Router()  
const FoodItem = require('../models/food_item');

router.get("/fooditem", async (req, res) => { 
    try { 
         
        
        const foodItem = await FoodItem.find({}); 
        console.log('FoodItems in the collection:');
        console.log(foodItem);
        return res.json({ foodItems: foodItem })

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

