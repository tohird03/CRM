const GET_STUDENT = (req, res) => {
    try {
        const { data: { id, role } } = req
        if(role != 'student' && role != 'admin') {
            return res.redirect('/teacher')
        }

        if(role != 'student' && role != 'teacher') {
            return res.redirect('/admin')
        }

        const foundUser = read('users.json').find(e => e.id == id)

        res.render('student', { foundUser })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    GET_STUDENT
}