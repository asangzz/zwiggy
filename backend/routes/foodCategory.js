 
const express = require('express')
const router = express.Router() 
const Category = require('../models/food_category');

router.get("/foodcategory", async (req, res) => { 
    try { 
         
        
        const category = await Category.find({}); 
        console.log('Category in the collection:');
        console.log(category);
        return res.json({ category: category })

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

