const { read, write } = require("../utils/FS")

const HOMEWORK_ADD = (req, res) => {
    const { title, desc, groupId } = req.body
    const homework = read("homework.json")
    const date = new Date()
    const controlDate = `${date.getDate()}-${date.getMonth() < 10 ? "0" + Number(date.getMonth() + 1)  : Number(date.getMonth() + 1)}-${date.getFullYear()}`

    const newHomework = {
        id: homework[0]?.id + 1 || 1,
        groupId: Number(groupId),
        title: title,
        desc: desc,
        date: controlDate
    }

    homework.unshift(newHomework)
    write("homework.json", homework)

    res.redirect("admin")
}

module.exports = {
    HOMEWORK_ADD
}