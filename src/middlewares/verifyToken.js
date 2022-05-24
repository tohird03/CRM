const jwt = require('jsonwebtoken')
const { read, write } = require("../utils/FS")

module.exports = (req, res, next) => {
    const { token } = req.cookies
    console.log(token);
    if(!token) {
        return res.redirect('/')
    }

    jwt.verify(token, "12121212", (err, decode) => {
        if(err instanceof jwt.TokenExpiredError) {
            return res.redirect('/')
        }

        if(err instanceof jwt.JsonWebTokenError) {
            return res.redirect('/')
        }

        const foundUser = read("users.json").find(e => e.id == decode.id)

        if (!foundUser) {
            res.clearCookie("token")
            return res.redirect("/")
        }

        req.data = decode
        req.user = foundUser

        next()
    })
}