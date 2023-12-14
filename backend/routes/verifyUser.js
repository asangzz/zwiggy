const express = require('express')
const User = require('../models/user_model')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
require('dotenv').config();

router.post("/verifyuser", async (req, res) => {
    let email = req.body.email;
    try { 
        let userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ error: "Email already registered" })
        }

        const comparePwd = bcrypt.compare(req.body.password, userData.password)
        if (!comparePwd) {
            return res.status(400).json({ error: "Incorrect Password" })
        }

        const data = {
            user: { 
                id: userData.id
             }
        }
        const secretKey = process.env.TOKEN_SIGN
        const authToken =  jwt.sign(data, secretKey)

        return res.json({ success: true, authToken: authToken })
 

    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;


 