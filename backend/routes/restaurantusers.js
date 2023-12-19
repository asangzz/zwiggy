 
const express = require('express')
const router = express.Router()
const RestaurantUser = require('../models/res_user_model')

router.get("/restaurantusers", async (req, res) => { 
    try { 
         
        
        const users = await RestaurantUser.find({}); 
        //console.log('Users in the collection:');
        //console.log(users);
        return res.send(users);

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

 

module.exports = router;

