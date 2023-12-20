const express = require('express')
const router = express.Router()  
const Order = require('../models/Orders'); 

router.post('/restaurantOrderData', async (req, res) => {
    try {
        const restaurantId = req.body.RestaurantId;

        // Use findOne to find an order with the specified RestaurantId
        const existingOrder = await Order.findOne({ 'RestaurantId': restaurantId });
console.log(existingOrder)
        if (existingOrder) {
            // If the order exists, retrieve the filtered order_data
            const filteredOrderData = existingOrder.order_data ? existingOrder.order_data.filter(
                item => item.RestaurantId === restaurantId
            ) : [];
            
            console.log('Filtered Order Data:', filteredOrderData);
            // Your further logic here

            res.json({ success: true, filteredOrderData });
        } else {
            // If no order with the specified RestaurantId is found
            console.log('No matching order found');
            res.json({ success: true, filteredOrderData: [] });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server Error' });
    }
});
module.exports = router