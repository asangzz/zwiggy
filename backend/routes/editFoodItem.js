const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const FoodItem = require('../models/food_item');

// PUT or PATCH request to update an existing food item
router.put('/editfooditem',
  body('name').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Find the existing food item by ID
      let existingFoodItem = await FoodItem.findOne({ _id: req.body._id });

      if (!existingFoodItem) {
        return res.status(404).json({ error: 'Food item not found' });
      }

      // Update the existing food item with the new data
      existingFoodItem.name = req.body.name;
      existingFoodItem.CategoryName = req.body.CategoryName;
      existingFoodItem.img = req.body.img;
      existingFoodItem.description = req.body.description;
      existingFoodItem.options = req.body.options; 
      // Update other fields as needed

      // Save the updated food item to the database
      await existingFoodItem.save();

      res.json({ success: true });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
);

module.exports = router;