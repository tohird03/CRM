const { read, write } = require("../utils/FS")
const RATING_STUDENT = (req, res) => {
    const { rating } = req.body
    const grade = rating.split("/")[0]
    const studentId = rating.split("/")[1]
    const homeworkId = rating.split("/")[2]
    const ratings = read("rating.json")
    const newRating = {
        grade: grade,
        studentId: studentId,
        homeworkId: homeworkId
    }

    ratings.unshift(newRating)
    write("rating.json", ratings)

    res.redirect("teacher")
}

module.exports = {
    RATING_STUDENT
}