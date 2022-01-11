// Express Set Up
const express = require('express')
const userRouter = express.Router()

// User Set Up
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const secret = process.env.SECRET

// @route   POST to api/user
// @desc    Register a user
// @access  Public
userRouter.post('/', 
    body('login').not().isEmpty().withMessage('Login must exist'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 digits long'),
    async (req, res) => {
        
        // Response Validations
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {login, password} = req.body

        
        try {
            // Check if login exist
            let user = await User.findOne({login})
            if (user) {
                res.status(400).json({errors: [{"msg": "Login already exist"}]})
            }

            // Create user with hashed password
            user = new User({
                login,
                password
            })
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            // JWT Set up

            const payload = {
                user: {
                    id: user.id,
                    login: user.login
                }
            }

            jwt.sign(payload, secret, {expiresIn: "3d"}, (error, token) => {
                if (error) {
                    res.status(400).json({errors: [{"msg": error}]})
                }

                res.status(200).json({token, login: payload.user.login})
            } )


        } catch (error) {
            res.status(400).send(error)
        }

    })

module.exports = userRouter