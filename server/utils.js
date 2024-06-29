module.exports = {
    generateRandomString,
    findId,
    // parses ip from req.ip
    stripIP: (ip) => {
        if (ip.substr(0, 7) == "::ffff:") {
            ip = ip.substr(7);
            return ip
        }
    },
    // checks if url is validd💯💯
    isURL: (url) => {
        try {
            let test = new URL(url)
            return true
        } catch (err) {
            return false
        }
    },
    /**
     * Checks if the hCaptcha token is valid
     * @param {string} token - hCaptcha token
     * @returns {Promise<boolean>} - whether the token is valid or not
     */
    hcaptchaCheck: async (token) => {
        const verifyResp = await fetch(
            `https://hcaptcha.com/siteverify?secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${token}`
        );
        const verifyJson = await verifyResp.json();
        return verifyJson.success;
    }
}
// for url generation
function* generateRandomString(len = 4) {
    while (true) {
        let result = ""
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (let i = 0; i < len; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        yield result;
    }
}


// @type {import("deta/dist/types").Base} Base
/**
 * Finds the id object using 
 * @param {import("deta/dist/types").Base} db
 * @param {string} id 
 * @returns {Promise<string> | Promise<boolean>}
 */
function findId(db, id) {
    return new Promise(async (resolve, reject) => {
        let shortenObj = await db.fetch({ id })
        if (shortenObj.count > 0) {
            resolve(shortenObj.items[0].original)
        } else {
            while (shortenObj.last) {
                shortenObj = await db.fetch({ id }, { last: shortenObj.last })
                if (shortenObj.count > 0) {
                    resolve(shortenObj.items[0].original)
                }
            }
            reject(false)
        }
    })
}
