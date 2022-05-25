const { read, write } = require("../utils/FS")

const GROUP_DELET = (req, res) => {
    const { id } = req.params
    const group = read("group.json")
    const findGroups = group.findIndex(e => e.id == id)

    group.splice(findGroups, 1)

    write("group.json", group)

    res.send({ok: true})
}

const GROUP_ADD = (req, res) => {
    const { groups, course, teacher } = req.body
    const group = read("group.json")
    const teachers = read("users.json")
    const courses = read("courses.json")

    const findCourse = courses.find(e => e.id == course)
    const findTeacher = teachers.find(e => e.id == teacher)

    const newGroup = {
        id: group[group.length - 1]?.id + 1 || 1 ,
        coursId: findCourse?.id,
        teachId: findTeacher?.id,
        groups: groups,
    }

    group.push(newGroup)
    write("group.json", group)

    res.redirect("admin")
}

module.exports = {
    GROUP_DELET,
    GROUP_ADD
}