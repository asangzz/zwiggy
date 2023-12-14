const express = require('express') 
const router = express.Router() 
const Category = require('../models/food_category')

router.post("/createcategory" 
,async (req, res) => {
   
    try {
          await Category.create({
        CategoryName: req.body.CategoryName, 
    } 
    )
    res.json({success: true})
    } catch (error) {
        console.log('error', error)
        res.json({success: false})
    }
  
})

module.exports = router;