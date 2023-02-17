require('dotenv').config()
const express = require("express")
const app = express()
const api = require("routers/api")
const render = require("routers/render")
const cors = require("cors")

var whitelist = ['https://shorten.zavaar.net', 'https://tools.zavaar.net', 'https://s.zavaar.net']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 /* || !origin */) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.use(cors({
    origin: whitelist
}))
app.set("view engine", "pug")
app.use(express.json())

app.use(render)
app.use("/api", api)

// app.listen(3000)
module.exports = app