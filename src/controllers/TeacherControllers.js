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

        const foundUser = read('users.json').find(e => e.id == id)

        res.render('teacher', { foundUser })
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

    res.redirect("admin")
}

module.exports = {
    GET_TEACHER,
    TEACHER_DELET,
    TEACHERS_ADD
}