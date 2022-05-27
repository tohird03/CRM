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

        const allTeachers = read('users.json')
        const allCourses = read('courses.json')
        const allGroups = read('group.json')
        const foundUser = read('users.json').find(e => e.id == id)
        const foundTeachers = read('users.json').filter(e => e.role == "teacher")
        const foundStudent = read('users.json').filter(e => e.role == "student")
        const foundGroups = allGroups.filter(e => foundTeachers.find(id => id.id == e.teachId) ? e.teacher = foundTeachers.find(id => id.id == e.teachId)
        : e)

        const controlGroups = foundGroups.filter(e => {
            if(!e.teacher){
                e.teachId = 0

                return e
            }else {
                return e
            }
        })

        const groupTrue = allGroups.filter(e => e.teacher ? delete e.teacher : e)
        write("group.json", groupTrue)

        const filterGroup = allGroups.filter(e => foundTeachers.find(id => id.id == e.teachId) ? e.teacher = foundTeachers.find(id => id.id == e.teachId)
        : e)

        res.render('admin', { foundUser, foundTeachers, foundStudent, allCourses, foundGroups, allGroups, controlGroups,filterGroup })
    } catch (error) {
        throw new Error(error)
    }
}

const UPDATE_GROUPS = (req, res) => {
    const { groupsId, teacher } = req.body
    const allGroups = read("group.json")

    const foundGroup = allGroups?.find(e => e.id == groupsId)

    foundGroup.teachId = teacher ?  teacher : foundGroup.teachId

    write("group.json", allGroups)
    res.redirect("admin")
}

module.exports = {
    GET_ADMIN,
    UPDATE_GROUPS
}