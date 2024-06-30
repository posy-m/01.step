const express = require("express")
const app = express()
const path = require("path")
const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller");
const { Posts } = require("./models")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", path.join(__dirname), "page")
app.set("view engine", "ejs")


app.listen(3000, () => {
  console.log("포터열림");
})

app.get("/", async (req, res) => {
  const users = await userController.userselectAll();
  res.render("main", { users })
})

app.get("/create", (req, res) => {
  res.render("create")
})

app.post("/create", async (req, res) => {
  const { name, age, msg } = req.body;
  await userController.create(name, age, msg);
  res.redirect("/")
});

app.post("/post_create", async (req, res) => {
  const { content, user_name } = req.body;
  await postController.create(content, user_name)
  req.redirect(`/view/${user_name}`)
})

app.get("/view/:name", async (req, res) => {
  const { name } = req.params;
  const data = await userController.userSelectName(name, Posts);
  res.render("view", { data })
})

