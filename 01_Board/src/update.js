const _param = new URLSearchParams(location.search).get("index");
const _getData = JSON.parse(localStorage.getItem("contentData"));
const _full = _getData[_param];
console.log(_full);
const title = document.querySelector("#writeTitle");
title.value = _full.title;
const content = document.querySelector("#writeContent");
content.innerHTML = _full.content;
const del = document.querySelector(".del");
const _upload = document.querySelector(".upload");
del.addEventListener("click", () => {
    location.href = "./boardlist.html";
});
_upload.addEventListener("click", () => {
    _getData[_param].title = title.value;
    _getData[_param].content = content.value;
    localStorage.setItem("contentData", JSON.stringify(_getData));
    location.href = "./boardlist.html";
});
