const express = require("express")
const path = require("path")
const postRouter = require("./3_routers/post")

const app = express()

app.set("view engin", " ejs");
app.set("views", path.join(__dirname, "page"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/css", express.static(path.join(__dirname, "public")));

app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("열림");
})
