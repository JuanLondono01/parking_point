const express = require('express')
const cors = require("cors")
const app = express()


// Settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use(require("./routes/vehicles"))


module.exports = app