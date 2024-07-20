const express = require('express')
const cors = require("cors")
const app = express()


// Settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use(require("./routes/cars"))
app.use(require("./routes/bikes"))
app.use(require("./routes/heavy"))


module.exports = app