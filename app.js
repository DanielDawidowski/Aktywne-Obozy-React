const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

require('dotenv').config()

// routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const eventRoutes = require('./routes/event')
const clientRoutes = require('./routes/client')


// app
const app = express()

//db
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log("DB connected"));

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())


// routes middlewares
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", eventRoutes)
app.use("/api", clientRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

