const express = require("express")
const { Deta } = require("deta")
const router = express.Router()

//db
const deta = Deta(process.env.PROJ_KEY)
const db = deta.Base("shorten")

router.get("/", (req, res) => {
    res.render("index", req.query) // this might be dangerous??
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.render("index", req.query) // this might be dangerous??
        return
    }
    const { items, count } = await db.fetch({ 'id': id })
    if (count > 0) {
        res.redirect(items[0].original)
    } else {
        res.status(404).redirect('/?msg=URL not found')
    }
})


module.exports = router