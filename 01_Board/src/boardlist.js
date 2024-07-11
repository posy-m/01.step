function createE() {
    const getlocal = JSON.parse(localStorage.getItem("contentData"));
    const listWrap = document.querySelector("#painWrap");
    listWrap.innerHTML = "";
    getlocal.forEach((e, index) => {
        const _ul = document.createElement("ul");
        const _li1 = document.createElement("li");
        const _li2 = document.createElement("li");
        const _li3 = document.createElement("li");
        const _li4 = document.createElement("li");
        const _li5 = document.createElement("li");
        _li1.append((index + 1) + "");
        _li2.append(e.title);
        _li2.addEventListener("click", () => {
            location.href = "./title.html?index=" + index;
        });
        _li3.append(e.nickname);
        _li4.innerText = "🔮";
        _li4.addEventListener("click", () => {
            location.href = "./update.html?index=" + index;
        });
        _li5.innerText = "❌";
        _li5.addEventListener("click", (e) => {
            getlocal.splice(index, 1);
            localStorage.setItem("contentData", JSON.stringify(getlocal));
            createE();
        });
        _ul.append(_li1, _li2, _li3, _li4, _li5);
        listWrap.append(_ul);
    });
}
createE();
