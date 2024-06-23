const exrpess = require("express");
const path = require("path")
const socketio = require("socket.io")
const app = exrpess();

app.set(exrpess.json())
app.use(exrpess.urlencoded({ extended: false }))
app.use("/chating", exrpess.static(path.join(__dirname, "page")))
app.use("/chating", exrpess.static(path.join(__dirname, "public")))

const server = app.listen(3000, () => {
  console.log("하잉 열림ㅎ");
})

app.get("/chating", (res, req) => {
  res.render("main2")
})

//web socket 프로토콜 생성
const io = socketio(server);
let users = [];
io.on("connection", (socket) => {
  users.push(socket.id)

  //
  socket.on("serverWhisper", ({ id, msg }) => {
    io.socket.to(id).emit("whisper", msg)
  })

  // 방에 점속을 요청 
  socket.on("joinRoom", (room, name) => {
    socket.join(room);
    io.to(room).emit("joinRoom", room, name);
  })

  //유저가 나가면 소켓값 제거
  socket.on("leaveRoom", (room, name) => {
    socket.leave(room)
    io.to(room).emit("leaveRoom", room, name)
  })

  //채팅 할 수 있게 하는거
  socket.on("chat", (room, name, msg) => {
    io.to(room).eimt("chatn", name, msg);
  })

  socket.on("disconnect", () => {
    users = users.filter((value) => value != socket.id)
  })

})

