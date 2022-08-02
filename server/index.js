require('dotenv').config()
const express = require("express")
const app = express()
const api = require("routers/api")
const render = require("routers/render")
const cors = require("cors")

app.use(cors({ origin: "https://shorten.zavaar.net" }))
app.set("view engine", "pug")
app.use(express.json())

app.use(render)
app.use("/api", api)

// app.listen(3000)
module.exports = app