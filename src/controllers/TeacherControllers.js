const { read, write } = require("../utils/FS")
const GET_TEACHER = (req, res) => {
    try {
        const { data: { id, role } } = req
        if(role != 'teacher' && role != 'admin') {
            return res.redirect('/student')
        }

        if(role != 'teacher' && role != 'student') {
            return res.redirect('/admin')
        }

        // FOUND COURSE, FOUND TEACHER
        const foundUser = read('users.json').find(e => e.id == id)
        const allGroups = read('group.json')
        const allCourses = read('courses.json')
        const foundGroups = allGroups.filter(e => e.teachId == foundUser.id ? e.teacher = foundUser : null)

        const foundCours = foundGroups.filter(e => allCourses.find(id => id.id == e.coursId) ? e.course = allCourses.find(id => id.id == e.coursId)
        : e)

        // FOUND TEACHER HOMEWORK
        const studentHomeTask = read("studentHomework.json")
        const teacherHomeTask  = read("homework.json")
        const rating  = read("rating.json")

        const userGroup = read('group.json').filter(e => e.teachId == foundUser.id)
        const studentFoundHomework = read("studentHomework.json").filter(e => read('users.json').find(d => d.id == e.studentId) ? e.groups = read('users.json').find(d => d.id == e.studentId) : null)

        const teacherGroupsHomeTask = studentFoundHomework.filter(e => userGroup.find(d => d.groups == e.groups.group))

        // TEACHER STUDENTS RATING
        const isNanTeachHomeTask = teacherGroupsHomeTask.filter(e => !rating.find(d => e.studentId == d.studentId && e.homeworkId == d.homeworkId))

        const isTeachHomeTask = teacherGroupsHomeTask.filter(e => rating.find(d => e.studentId == d.studentId && e.homeworkId == d.homeworkId))

        res.render('teacher', { foundUser, foundCours, teacherGroupsHomeTask, isNanTeachHomeTask, isTeachHomeTask, allGroups })
    } catch (error) {
        throw new Error(error)
    }
}

const TEACHER_DELET = (req, res) => {
    const { id } = req.params
    const users = read("users.json")
    const findTeacher = users.findIndex(e => e.id == id)

    users.splice(findTeacher, 1)

    write("users.json", users)

    res.send({ok: true})
}

const TEACHERS_ADD = (req, res) => {
    const { username, password, phone, course } = req.body
    const teacher = read("users.json")


    const newTeacher = {
        id: teacher[teacher.length - 1]?.id + 1 || 1 ,
        username: username,
        password: password,
        phone: phone,
        role: "teacher",
        course: course,
        profilePhoto: ""
    }

    teacher.push(newTeacher)
    write("users.json", teacher)

    res.redirect("teacher")
}

module.exports = {
    GET_TEACHER,
    TEACHER_DELET,
    TEACHERS_ADD
}