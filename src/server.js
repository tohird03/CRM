const express = require("express")
const ejs = require("ejs")
const path = require("path")
const cookieParser = require('cookie-parser')
const router = require("./routes/routes")

const app = express()
const PORT = process.env.PORT || 9000

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use("/assets", express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(router)
app.use("/*", (_, res) => res.sendStatus(404))
app.listen(PORT)