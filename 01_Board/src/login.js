const loginBox = document.querySelector("#loginBox");
let a = "";
loginBox.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginEmail = document.querySelector("#loginEmail");
    let loginPassword = document.querySelector("#loginPassword");
    const localInfo = JSON.parse(localStorage.getItem("signupInfo"));
    localInfo.forEach(info => {
        if (info.adress === loginEmail.value && info.password === loginPassword.value) {
            sessionStorage.setItem("signupInfo", JSON.stringify(info));
            alert("환영합니다.");
            location.href = "../html/mainpage.html";
            a = "true";
            return;
        }
    });
    if (a !== "true") {
        mistake();
    }
});
function mistake() {
    const localInfo = JSON.parse(localStorage.getItem("signupInfo"));
    const loginEmail = document.querySelector("#loginEmail");
    const loginPassword = document.querySelector("#loginPassword");
    if (localInfo.adress !== loginEmail.value && localInfo.password !== loginPassword.value) {
        alert("이메일 또는 비밀번호를 다시 확인해 주세요.");
    }
    ;
}
