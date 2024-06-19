const express = require("express")
const path = require("path")
const jwt = require("jsonwebtoken")
const mysql2 = require("mysql2/promise")
const cookie = require("cookie-parser")
const router = require('./routers/upload.router')


const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookie())
app.use(router)


app.listen(3000, () => {
  console.log("열림ㅋ");
})




