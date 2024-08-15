// express 여기서 있다고 가정하에 작성

import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("server on!");
})