const router = require("express").Router();
const { join, login } = require("../controllers/user.controllers")


router.get("/", (req, res) => {
  res.render("main")
})

router.get("/join", (req, res) => {
  res.render("join")
})
router.get("/login", (req, res) => {
  res.render("login")
})

router.post("/join", async (req, res) => {
  try {
    const { uid, upw } = req.body
    await join(uid, upw)
    res.redirect("/")
  } catch (error) {
    console.log("라우터 join에서 틀림ㅋ");
  }
})

router.post("/login", async (req, res) => {
  try {
    const { uid, upw } = req.body
    const token = await login(uid, upw)
    // 응답 메세지에 쿠키에 대한 내용이 포함되는거다. 헤더에 포함
    // 기록만 하는애
    // undefind 반환
    if (token === undefined)
      res.redirect("/login")

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/")

  } catch (error) {
    console.log("라우터 login에서 틀림ㅋ");
  }
})


module.exports = router;