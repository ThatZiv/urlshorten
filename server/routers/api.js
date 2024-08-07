const express = require("express")
const { Deta } = require("deta")
const router = express.Router()
const { generateRandomString, stripIP, isURL } = require("../utils")
const utils = require("../utils")
const idGen = generateRandomString()

//db
const deta = Deta(process.env.PROJ_KEY)
const db = deta.Base("shorten")

router.post("/create", async (req, res) => {
    let url = req.query.url
    let hcaptcha = req.query.hcaptcha
    if (!url) {
        res.status(400).json({ error: "No URL provided" })
        return
    }
    url = decodeURIComponent(url)
    if (!isURL(url)) {
        res.status(400).json({ error: "Invalid URL" })
        return
    }
    hcaptcha = decodeURIComponent(hcaptcha)
    if (!(await utils.hcaptchaCheck(hcaptcha))) {
        res.status(400).json({ error: "Invalid captcha" })
        return
    }
    let id = idGen.next().value

    do {
        try {
            let idCheck = await utils.findId(db, id);
            if (idCheck.count > 0) {
                id = idGen.next().value
            } else {
                break
            }
        }
        catch (err) {
            break
        }
    } while (true)

    let obj = {
        original: url,
        shortened: `https://${process.env.DOMAIN}/${id}`,
        id
    }
    const inserted = await db.put(obj)
    res.json(inserted)
})


// api integration for redirection
router.get("/get/:id", async (req, res) => {
    var id = req.params.id
    if (!id) {
        res.status(400).json({ error: "No URL provided" })
        return
    }
    let shortenObj = await db.fetch({ id })
    if (shortenObj.count > 0) {
        res.status(200).send(shortenObj)
    } else {
        while (shortenObj.last) {
            shortenObj = await db.fetch({ id }, { last: shortenObj.last })
            if (shortenObj.count > 0) {
                return res.status(200).send(shortenObj)
            }
        }
        res.status(404).send("<h1>404 Not Found</h1>") // TODO have a better way of showing this
    }
})

module.exports = router