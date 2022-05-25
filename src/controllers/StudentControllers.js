const { read, write } = require("../utils/FS")
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

const STUDENT_DELET = (req, res) => {
    const { id } = req.params
    const users = read("users.json")
    const findUser = users.findIndex(e => e.id == id)

    users.splice(findUser, 1)

    write("users.json", users)

    res.send({ok: true})
}

const STUDENT_ADD = (req, res) => {
    const { username, password, phone, course, group } = req.body
    const student = read("users.json")


    const newStudent = {
        id: student[student.length - 1]?.id + 1 || 1 ,
        username: username,
        password: password,
        phone: phone,
        role: "student",
        course: course,
        group: group,
        profilePhoto: ""
    }

    student.push(newStudent)
    write("users.json", student)

    res.redirect("admin")
}

module.exports = {
    GET_STUDENT,
    STUDENT_DELET,
    STUDENT_ADD
}