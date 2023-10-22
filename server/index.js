// require('dotenv').config()
const express = require("express")
const app = express()
const api = require("./routers/api")
const render = require("./routers/render")
const cors = require("cors")
const port = process.env.PORT
var whitelist = ['https://tools.zavaar.net']
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

app.listen(port || 3000, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app