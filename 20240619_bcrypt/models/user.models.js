const mysql = require("./config")
const bcrypt = require("bcrypt")

// const user라는 객체를 만들고 수정 삭제 객체를 만들면 된다.
// 쿼리문을 실행할 모델들을 만든다.
const user = {
  initTable: async () => {
    try {
      await mysql.query("SELECT * FROM user")
    } catch (error) {
      await mysql.query("CREATE TABLE user(uid VARCHAR(20) PRIMARY KEY, upw VARCHAR(300), date DATE)")
      console.log("테이블 있지롱 ㅋ");
    }
  },

  //데이터 베이스와 상용작용할 수 있게 작성
  join: async (uid, upw) => {
    try {
      const [[data]] = await user.userinfo(uid)
      console.log(data === undefined);
      if (data === undefined)
        await mysql.query("INSERT INTO user(uid, upw)VALUES(?,?)", [uid, upw])
      // 가입 여부가 됐냐 안됏냐를 리턴해줬다.
      // return data === undefined , ture랑 false를 말해주려고
      // undefined면 가입이 된거고, 아니면 안된거고
      return data === undefined

    } catch (error) {
      console.log("join에서 틀림");
    }
  },

  userinfo: async (uid) => {
    try {
      return await mysql.query("SELECT * FROM user WHERE uid = ?", [uid])
    } catch (error) {
      console.log("userinfo 틀림");
    }
  },

  login: async (uid, upw) => {
    try {
      const [[data]] = await user.userinfo(uid);
      const { uid: uid_id, upw: upw_pw } = data
      const compareCheck = await compare(upw, upw_pw);
      return ((uid === uid_id) && (compareCheck))
    } catch (error) {
    }
  }
}

const compare = (pw, hash) => {
  return new Promise((res, rej) => {
    bcrypt.compare(pw, hash, (err, same) => {
      if (err) rej(err);
      res(same);
    })
  })
}

module.exports = user
