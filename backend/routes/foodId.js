 
const express = require('express')
const router = express.Router()  
const FoodItem = require('../models/food_item');
const Category = require('../models/food_category');

router.post("/foodid", async (req, res) => { 
    try { 
      const foodId = req.body._id;

   

      if (!foodId) {
        return res.status(400).json({ error: 'Restaurant ID is required.' });
      }

      let foodItem  
        
        try {
               foodItem = await FoodItem.find({"_id":foodId}) 

            console.log("LIST 1",foodItem)
            
          } catch (err) {
            console.log("FoodItemError",err)
          }

         
        return res.send( foodItem    )

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

