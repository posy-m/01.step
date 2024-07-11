

const _param = new URLSearchParams(location.search).get("index");
// console.log(param);

const _getData = JSON.parse(localStorage.getItem("contentData"))

const _full = _getData[_param]
console.log(_full);

const title = document.querySelector("#writeTitle") as HTMLInputElement
title.value = _full.title
const content = document.querySelector("#writeContent") as HTMLTextAreaElement
content.innerHTML = _full.content

const del = document.querySelector(".del") as HTMLButtonElement
const _upload = document.querySelector(".upload") as HTMLButtonElement

del.addEventListener("click", () => {
  location.href = "./boardlist.html"
})

_upload.addEventListener("click", () => {
  _getData[_param].title = title.value
  _getData[_param].content = content.value
  localStorage.setItem("contentData", JSON.stringify(_getData))

  location.href = "./boardlist.html"
})












