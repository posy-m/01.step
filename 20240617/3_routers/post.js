const router = require("express").Router();
const { ViewPostAll, ViewIndexPost, SetPostContent } = require("../2_controllers/post");

router.get("/", async (req, res) => {
  try {
    const data = await ViewPostAll()
    res.render("main", { data })
  } catch (error) {
    console.log(" err : router view post all");
  }
})

router.get("/insert", (req, res) => {
  res.render("insert")
})

router.post("/insert", async (req, res) => {
  try {
    const { title, content } = req.body;
    await SetPostContent(title, content)
    res.redirect("/post")
  } catch (error) {
    console.log(" err : router insert post");
  }
})

module.exports = router