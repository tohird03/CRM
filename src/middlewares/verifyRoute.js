const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { token } = req.cookies
    if(token) {
        jwt.verify(token, "12121212", (err, decode) => {
            if(!err) {
                if(decode.role == 'admin') {
                    return res.redirect('/admin')
                }

                if(decode.role == 'teacher') {
                    return res.redirect('/teacher')
                }

                if(decode.role == 'student') {
                    return res.redirect('/student')
                }
            } else {
                next()
            }
        })
    } else {
        next()
    }
}