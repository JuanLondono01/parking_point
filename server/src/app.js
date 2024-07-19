const express = require('express')
const cors = require("cors")
const app = express()


// Settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use(require("./routes/autos"))
app.use(require("./routes/motos"))
app.use(require("./routes/v.pesados"))


module.exports = app