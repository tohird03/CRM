const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginController")
const AdminController = require("../controllers/AdminController")
const TeacherControllers = require("../controllers/TeacherControllers")
const StudentControllers = require("../controllers/StudentControllers")

const verifyToken = require("../middlewares/verifyToken")
const verifyRole = require("../middlewares/verifyRole")
const verifyRoute = require("../middlewares/verifyRoute")
router
    .get("/", verifyRoute, LoginController.GET_LOGIN)
    .get("/admin", verifyToken, AdminController.GET_ADMIN)
    .get("/teacher", verifyToken, TeacherControllers.GET_TEACHER)
    .get("/student", verifyToken, StudentControllers.GET_STUDENT)
    .post("/login", verifyRole, LoginController.POST_LOGIN)

module.exports = router