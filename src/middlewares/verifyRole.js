const { read, write } = require("../utils/FS")

module.exports = (req, res, next) => {
    const { password, name } = req.body
    const foundUser = read("users.json").find(e => e.username == name && e.password == password)
    
    if(!foundUser) {
        res.redirect("/")
        return
    }

    req.user = foundUser

    next()
}