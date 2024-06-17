// 커넥션 연결 설정


// connection은 동시에 여러 쿼리문을 처리 하지 못하지만, 
// Pool은 동시에 여러 쿼리문을 병렬적으로 처리가능
const mysql2 = require("mysql2/promise")

const mysql = mysql2.createPool({
  user: "root",
  password: "admin123",
  multipleStatements: true,
  database: "mypage"
})

// 커넥션 테스트
// pool을 생성한 후 getConnection()을 통해 가져다가 사용해야함
mysql.getConnection((err) => {
  console.log(err);
})

module.exports = mysql;