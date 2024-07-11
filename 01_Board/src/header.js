function changeLogout() {
    const loginStatus = JSON.parse(sessionStorage.getItem("signupInfo"));
    const mypagechange = document.querySelector(".mypagechange");
    const logoutchange = document.getElementById("logoutchange");
    const logoutBtn = document.createElement("span");
    const mypageBtn = document.createElement("span");
    logoutBtn.classList.add("hearder-text");
    mypageBtn.classList.add("hearder-text");
    if (loginStatus) {
        logoutBtn.innerText = "log-out";
        logoutchange.replaceWith(logoutBtn);
        logoutBtn.onclick = (e) => {
            alert("로그아웃 되었습니다.");
            sessionStorage.clear();
            location.reload();
        };
        mypageBtn.innerText = "myPage";
        mypagechange.replaceWith(mypageBtn);
        mypageBtn.onclick = (e) => {
            location.href = "../html/mypage.html";
        };
    }
}
changeLogout();
const product1 = document.querySelector("#product1");
const headerNav = document.querySelector("#headerNav");
const blur_ = document.querySelector('#blur');
product1.addEventListener("mouseenter", (e) => {
    headerNav.style.display = "block";
});
product1.addEventListener("mouseleave", (e) => {
    headerNav.style.display = "none";
});
blur_.addEventListener("mouseover", (e) => {
    headerNav.style.display = "block";
});
blur_.addEventListener("mouseleave", (e) => {
    headerNav.style.display = "none";
});
