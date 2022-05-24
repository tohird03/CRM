const GET_TEACHER = (req, res) => {
    try {
        const { data: { id, role } } = req
        if(role != 'teacher' && role != 'admin') {
            return res.redirect('/student')
        }

        if(role != 'teacher' && role != 'student') {
            return res.redirect('/admin')
        }

        const foundUser = read('users.json').find(e => e.id == id)

        res.render('teacher', { foundUser, foundProducts })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    GET_TEACHER
}