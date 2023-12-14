 
const express = require('express')
const router = express.Router()
const User = require('../models/user_model')

router.get("/users", async (req, res) => { 
    try { 
         
        
        const users = await User.find({}); 
        console.log('Users in the collection:');
        console.log(users);

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

