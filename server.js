const express = require('express');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const trackerRouter = require('./routes/tracker');
const app = express();
const logger = require('./setup/middleware/logger')
var cors = require('cors')

// Middleware set up
app.use(logger)
app.use(express.json({extended: false}))
app.use(cors())

// DB Set up
const connectDB = require('./setup/db')
connectDB()

// Routes
app.get('/', (req, res) => res.send("App is working"))
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/tracker', trackerRouter)

// App Run
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Port is listening on ${PORT}`))