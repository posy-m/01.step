const crypto = require("crypto")
const pw = "admin123";

const hash = crypto.createHash("sha256");

const hashing = hash.update(pw);

// hex 문자열로 변경
const hashString = hashing.digest("hex");

crypto.randomBytes(32, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.toString("hex"));
  }
})

const createHash = (salt, password) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(
      password,
      salt,
      165165,
      64,
      "sha256",
      (err, hash) => {
        if (err) rej(err);
        res(hash.toString("hex"))
      }
    )
  })
}


const express = require("express")
const mysql2 = require("mysql2/promise")
const app = express();
const path = require("path")

app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mysql = mysql2.createPool({
  user: "root",
  password: "alswl;0113#",
  database: "root",
  multipleStatements: true
})

const userInit = async () => {
  try {
    await mysql.query("SELECT * FROM going")
  } catch (error) {
    await mysql.query("CREATE TABLE root(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(120), salt VARCHAR(120))")

  }
}

userInit();

app.get("/join", (res, res) => {
  res.render("join")
})

app.get("/login", (res, res) => {
  res.render("login")
})

app.post("/join", async (req, res) => {
  const { uid, upw } = req.body;
  const salt = await createSalt()
  const hash = await createHash(salt, upw);
  await mysql.query("INSERT INTO going(uid, upw, salt)VALUES(?,?,?)", [uid, hash, salt]);
  res.redirect("/login")
})

app.post("/login", async (req, res) => {
  const { uid, upw } = req.body;
  const [[result]] = await mysql.query("SELSECT * FROM going WHERE uid =?", [uid]);
  if (result?.salt) {
    const { salt } = result;
    const hash = await createHash(salt, upw);
    if (hash == result.upw) {
      res.send("로그인 됨")
    } else {
      res.send("비밀번호 오류")
    }
  } else {
    res.send("유저 없ㅇ므")
  }

})

app.listen(3000, () => {
  console.log(" 열림!");
})








