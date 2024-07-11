

const param = new URLSearchParams(location.search).get("index");
console.log(param);

const getData = JSON.parse(localStorage.getItem("contentData"))

const full = getData[param]
console.log(full);

const writeTitle = document.querySelector("#writeTitle") as HTMLDivElement

console.log(writeTitle);

writeTitle.innerHTML = full.title
const writeContent = document.querySelector("#writeContent") as HTMLDivElement
writeContent.innerHTML = full.content

const check = document.querySelector(".check") as HTMLButtonElement
check.addEventListener("click", () => {
  location.href = "./boardlist.html"
})