// 설정

const mysql2 = require("mysql2/promise")

const mysql = mysql2.createPool({
  user: "root",
  password: "alswl;0113#",
  database: "mypage",
  multipleStatements: true
})

module.exports = mysql





