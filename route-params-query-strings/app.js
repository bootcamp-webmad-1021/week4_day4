require("dotenv/config")

require("./db")

const express = require("express")
const app = express()

require("./config")(app)

app.locals.title = `Week 4 day 4`

const index = require("./routes/index")
app.use("/", index)

require("./error-handling")(app)

module.exports = app