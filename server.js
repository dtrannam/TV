require('dotenv').config()
const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const trackerRouter = require('./routes/tracker');
const logger = require('./setup/middleware/logger')
const session = require('express-session')
const cors = require('cors')

// Middleware set up
app.use(logger)
app.use(express.json({extended: false}))
app.use(cors())

// DB Set up
const connectDB = require('./setup/db')
connectDB()

// Session Set up 
app.use(session({
    secret: process.env.SESSION,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: 3600000 * 24
    }

}))


// Routes
app.get('/', (req, res) => res.send("App is working"))
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/tracker', trackerRouter)

// App Run
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Port is listening on ${PORT}`))