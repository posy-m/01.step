const _delete = document.querySelector(".del");
const upload = document.querySelector(".upload");
_delete.addEventListener("click", () => {
    location.href = "./boardlist.html";
});
upload.addEventListener("click", () => {
    if (!confirm("작성을 완료하시겠습니까?"))
        return;
    const title = document.querySelector("#writeTitle").value;
    const content = document.querySelector("#writeContent").value;
    const tc = {
        title,
        content,
        nickname: JSON.parse(sessionStorage.getItem("signupInfo")).nickname
    };
    let arr = [tc];
    const local = JSON.parse(localStorage.getItem("contentData")) || [];
    local.push(tc);
    const data = localStorage.setItem("contentData", JSON.stringify(local));
    console.log(data);
    location.href = "./boardlist.html";
});
