// 안전하게 post 요청만 받아야한당.

const express = require("express")
const app = express()
const core = require("cors")
const mysql2 = require("mysql2/promise")
const { default: axios } = require("axios")

app.use(cors({
  origin: "http://127.0.0.1:5500 ",
  Credential: true
  // 인증, 권한 부여와 관련된 정보
  // 클라이언트가 쿠키를 포함한 자격증명을 서버에 전송할 수 있도록 설정
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.post("/login", (req, res) => {
  const { uid, upw } = req.body
  res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`)
})
app.post("/signup", (req, res) => {
  const { uid, upw } = req.body
  res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`)
})

app.link("4000", () => {
  console.log("back server on!!!");
})