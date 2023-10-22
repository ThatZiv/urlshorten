const express = require("express")
const { Deta } = require("deta")
const utils = require("../utils")
const router = express.Router()

//db
const deta = Deta(process.env.PROJ_KEY)
const db = deta.Base("shorten")

router.get("/", (req, res) => {
    res.redirect('https://tools.zavaar.net/#/shorten')
})

// this isnt a render route anymore
router.get("/:id", async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(404).send("<h1>404 Not Found</h1>")
        return
    }
    const check = await utils.findId(db, id)
    if (check) {
        res.redirect(check)
    } else {
        res.status(404).send("<h1>404 Not Found</h1>")
    }
})


module.exports = router