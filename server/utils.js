module.exports = {
    generateRandomString,
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
    }
}
// for url generation
function* generateRandomString(len=4) {
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