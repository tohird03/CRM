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
        const allTeachers = read('users.json')
        const foundTeachers = read('users.json').filter(e => e.role == "teacher")
        const foundStudent = read('users.json').filter(e => e.role == "student")
        const allCourses = read('courses.json')
        const allGroups = read('group.json')
        const foundGroups = allGroups.filter(e => foundTeachers.find(id => id.id == e.teachId) ? e.teacher = foundTeachers.find(id => id.id == e.teachId)
        : e)

        res.render('admin', { foundUser, foundTeachers, foundStudent, allCourses, foundGroups, allGroups })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    GET_ADMIN,
}