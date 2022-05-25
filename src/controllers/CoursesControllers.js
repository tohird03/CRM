const { read, write } = require("../utils/FS")

const COURSE_DELET = (req, res) => {
    const { id } = req.params
    const courses = read("courses.json")
    const findCourse = courses.findIndex(e => e.id == id)

    courses.splice(findCourse, 1)

    write("courses.json", courses)

    res.send({ok: true})
}
const COURSES_ADD = (req, res) => {
    const { title, desc, price } = req.body
    const courses = read("courses.json")
    
    const newCourse = {
        id: courses[courses.length - 1]?.id + 1 || 1 ,
        title: title,
        desc: desc,
        price: price
    }

    courses.push(newCourse)
    write("courses.json", courses)

    res.redirect("admin")
}

module.exports = {
    COURSE_DELET,
    COURSES_ADD
}