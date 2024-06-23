let socket = null;
let room = "";
let name = "";

loginBtn.onclick = () => {
  login.style.display = "none"
  main.style.display = "block";
  if (!socket)
    socket = io.connect();

  room = rooms.options[rooms.selectedIndex].value;
  _name = username.value
  socket.emit("joinRoom", room, username.value);

  // 방에 들어왔다고 표시
  socket.on("joinRoom", (room, _name) => {
    const li = document.createElement("li")
    li.classList.add("join-text")
    li.innerHTML = `${room}에 ${_name} 들어왔습니다.`
    message.append(li);
  })

  //방에서 나가는거
  socket.on("joinRoom", () => {
    const li = document.createElement("li")
    li.classList.add("join-text")
    li.innerHTML = `${room}에 ${_name} 나갔습니다.`
    message.append(li);
  })

  // 채팅 기능 _ 상대방한테 보이게 
  socket.on("chat", (_name, msg) => {
    const li = document.createElement("li")
    li.classList.add("join-text")
    li.innerHTML = `${_name} : ${msg}`;
    message.append(li);
  })
}

rooms.onchange = (e) => {

  // 방에서 나간거
  socket.emit("leaveRoom", room, _name)
  room = e.target.options[e.target.selectedIndex].value;
  socket.emit("soinRoom", room, _name)
}

sendBtn.onclick = () => {
  socket.emit('chat', room, _name, msgInput.value);
  msgInput.value = "";
}