const fs = require("fs")
const { read, write } = require("../utils/FS")
const path = require("path")

const UPLOAD_FILE = (req, res) => {
    const { homeFile } = req.files
    const { title, _, desc, groupId } = req.body
    const studentHomework = read("studentHomework.json")

    homeFile?.mv(__dirname + "/../uploads/" + homeFile?.name, (err) => {
        if(err) throw err
    })

    // date
    const date = new Date()
    const controlDate = `${date.getDate()}-${date.getMonth() < 10 ? "0" + Number(date.getMonth() + 1)  : Number(date.getMonth() + 1)}-${date.getFullYear()}`

    const sendStudentHomework = {
        id: studentHomework[0]?.id + 1 || 1,
        studentId: groupId?.split("/")[1],
        homeworkId: groupId?.split("/")[0],
        homeFile: `http://localhost:9000/assets/${homeFile.name}`,
        title: title,
        date: controlDate,
        size: `${Math.floor(homeFile.size / 1000)/1000}mb`
    }

    studentHomework.unshift(sendStudentHomework)
    write("studentHomework.json", studentHomework)
    
    res.redirect("student")
}

module.exports = {
    UPLOAD_FILE
}