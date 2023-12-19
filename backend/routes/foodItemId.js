 
const express = require('express')
const router = express.Router()  
const FoodItem = require('../models/food_item');
const Category = require('../models/food_category');

router.post("/fooditemid", async (req, res) => { 
    try { 
      const restaurantId = req.body.restaurantId;

   

      if (!restaurantId) {
        return res.status(400).json({ error: 'Restaurant ID is required.' });
      }

      let foodItemList = []
      let foodCategoryList = []
        
        try {
             const foodItem = await FoodItem.find({RestaurantId:restaurantId}) 

            console.log("LIST 1",foodItem)
            foodItemList = foodItem
          } catch (err) {
            console.log("FoodItemError",err)
          }

          try {
            const  foodCategory = await Category.find({ }) 
              foodCategoryList = foodCategory
          } catch (err) {
            console.log("categoryError",err)
          }
        return res.send([foodItemList, foodCategoryList] )

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

