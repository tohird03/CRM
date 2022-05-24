const jwt = require('jsonwebtoken')

const sign = (payload) => jwt.sign(payload, "12121212", { expiresIn: "30d" })

module.exports = {
    sign
}