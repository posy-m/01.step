const express = require("express");
const app = express();
const path = require("path")
const uploadRouter = require("./routers/upload.router");

app.use(express, json())
app.use(express.urlencoded({ extended: false }))

app.use("/img", express.static(path.join(__dirname, "upload")))

app.use("/upload", uploadRouter);

app.listen(3000, () => {
  console.log("포트 열림ㅋ");
})
