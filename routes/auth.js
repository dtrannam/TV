// Express Set Up
const express = require('express')
const authRouter = express.Router()

// User Set Up
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const secret = process.env.SECRET


// @route   POST to api/auth
// @desc    Sign in a user
// @access  Public
authRouter.post('/', 
    body('login').not().isEmpty().withMessage('Login is required'),
    body('password').not().isEmpty().withMessage('Password is required'),
    
    async (req, res) => {
        try {
            
        // Response Validations
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()})
        }

        const {login, password} = req.body
        const user = await User.findOne({login})

        // Check if login exist
        if (!user) {
            return res.status(401).json({errors: [{"msg": "Failed to login"}]})
        }

        // Check to see if password is correct
        const result = await bcrypt.compare(password, user.password)

        if (!result) {
            return res.status(401).json({errors: [{"msg": "Failed to login"}]})
        }

        // JWT Set up

        const payload = {
            user: {
                id: user.id,
                login: user.login
            }
        }
        
        jwt.sign(payload, secret, {expiresIn: "3d"}, function (error, token) {
            if (error) {
                return res.status(400).json({errors: [{"msg": error}]})
            } else {
                return res.status(200).json({token, login: payload.user.login})
            }})
        } catch (error) {
            return res.status(400).send(error)
        }
    }
)

module.exports = authRouter