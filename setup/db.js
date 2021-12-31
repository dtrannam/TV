// Set Up
require('dotenv').config()
const db = process.env.DBURI
const port = process.env.PORT

const mongoose = require('mongoose')

// Function to connect to DB
const connectDB = async () =>  {
    try {
        await mongoose.connect(db)
        console.log("Database has been connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
