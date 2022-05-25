const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginController")
const AdminController = require("../controllers/AdminController")
const TeacherControllers = require("../controllers/TeacherControllers")
const StudentControllers = require("../controllers/StudentControllers")
const GroupController = require("../controllers/GroupController")
const CoursesController = require("../controllers/CoursesControllers")

const verifyToken = require("../middlewares/verifyToken")
const verifyRole = require("../middlewares/verifyRole")
const verifyRoute = require("../middlewares/verifyRoute")
router
    .get("/", verifyRoute, LoginController.GET_LOGIN)
    .get("/admin", verifyToken, AdminController.GET_ADMIN)
    .get("/teacher", verifyToken, TeacherControllers.GET_TEACHER)
    .get("/student", verifyToken, StudentControllers.GET_STUDENT)
    .post("/login", verifyRole, LoginController.POST_LOGIN)
    .delete("/teacher/:id", verifyToken, TeacherControllers.TEACHER_DELET)
    .delete("/student/:id", verifyToken, StudentControllers.STUDENT_DELET)
    .delete("/group/:id", verifyToken, GroupController.GROUP_DELET)
    .delete("/course/:id", verifyToken, CoursesController.COURSE_DELET)
    .post("/teachersAdd", verifyToken, TeacherControllers.TEACHERS_ADD)
    .post("/studentAdd", verifyToken, StudentControllers.STUDENT_ADD)
    .post("/groupsAdd", verifyToken, GroupController.GROUP_ADD)
    .post("/coursesAdd", verifyToken, CoursesController.COURSES_ADD)

module.exports = router