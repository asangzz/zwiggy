const express = require('express')
const router = express.Router()  
const Order = require('../models/Orders');  

router.post('/restaurantOrderData', async (req, res) => {
 

    try {
        const { restaurantId } = req.body;

        // Find orders that match the RestaurantId
        const orders = await Order.find({
            'order_data': {
                $elemMatch: {
                    $elemMatch: { 'RestaurantId': restaurantId }
                }
            }
        });

        // Filter out order_data that doesn't have the specified RestaurantId
        const filteredOrders = orders.map(order => ({
            ...order.toObject(),
            order_data: order.order_data.filter(item => item.some(i => i.RestaurantId === restaurantId))
        }));

        res.json({ orderData: filteredOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;