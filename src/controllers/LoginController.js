const { sign } = require("../utils/jwt")
const GET_LOGIN = (req, res) => {
    try {
        res.render("login", { error: false })
    } catch (error) {
        throw new Error(error)
    }
}

const POST_LOGIN = (req, res) => {
    const { user } = req
    if(user.role == "admin"){
        res.cookie('token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/admin')
    }

    if(user.role == "teacher"){
        res.cookie('token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/teacher')
    }

    if(user.role == "student"){
        res.cookie('token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/student')
    }

}

module.exports = {
    GET_LOGIN,
    POST_LOGIN
}