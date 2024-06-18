const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken")
const mysql2 = require("mysql2/promise")

const cookie = require("cookie-parser");

require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookie())

const mysql = mysql2.createPool({
  user: "root",
  password: "alswl;0113#",
  database: "mypage",
  multipleStatements: true,
})

//테이블 초기화
const tableinit = async () => {
  try {
    await mysql.query("select * from sign");
  } catch (error) {
    await mysql.query("create table sign(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(20), upw VARCHAR(128))")
  }
}

tableinit();



const bcrypt = require("bcrypt");


// Promise 객체 : 이벤트 루프의 비동기 처리
const createHash = (pw) => {
  return new Promise((res, rej) => {
    bcrypt.hash(pw, 10, (err, data) => {
      if (err) rej("헤싱 실패");
      res(data);
    })
  })
}

app.get("/", (req, res) => {
  res.render("join")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/", async (req, res) => {
  const { uid, upw } = req.body;
  const hash = await createHash(upw)
  await mysql.query("INSERT INTO sign(uid,upw) VALUES(?,?)", [uid, hash]);
  res.redirect("/login")
  // redirect : 이동 => login 주소로 이동
})




app.listen(3000, () => {
  console.log("포트 열림!!!!!!");
})





