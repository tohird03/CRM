const { read, write } = require("../utils/FS")
const GET_ADMIN = (req, res) => {
    try {
        const { data: { id, role } } = req
        if(role != 'admin' && role != 'teacher') {
            return res.redirect('/student')
        }

        if(role != 'admin' && role != 'student') {
            return res.redirect('/teacher')
        }

        const foundUser = read('users.json').find(e => e.id == id)

        // const foundProducts = read("products.json").filter(e => e.adminId == foundUser.id)
        res.render('admin')
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    GET_ADMIN,
}