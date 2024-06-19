const userModels = require("../models/user.models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

require("dotenv").config()



const createHash = (pw) => {
  return new Promise((res, rej) => {
    bcrypt.hash(pw, 10, (err, data) => {
      if (err) rej("헤싱 실패");
      res(data);
    })
  })
}

const user = {
  join: async (uid = "123", upw = "123") => {
    const hash = await createHash(upw)
    return userModels.join(uid, hash)
  },

  login: async (uid = "123", upw = "1234") => {
    // await userModels.login(uid, upw)
    // console.log(await userModels.login(uid, upw));
    if (await userModels.login(uid, upw)) {
      return jwt.sign({ uid }, "123", { expiresIn: "5m" })
    } else {
      return
    }
    // 복호화 : 암호화 된걸 원래값으로 되돌리는 것.
  }
}

user.login()

module.exports = user






