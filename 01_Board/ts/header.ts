interface IHeader {
  adress: string,
  password: string
}


//로그인을 로그아웃으로 변경

function changeLogout() {
  const loginStatus = JSON.parse(sessionStorage.getItem("signupInfo"))

  const mypagechange = document.querySelector(".mypagechange") as HTMLSpanElement;
  const logoutchange = document.getElementById("logoutchange") as HTMLSpanElement;

  const logoutBtn = document.createElement("span") as HTMLSpanElement
  const mypageBtn = document.createElement("span") as HTMLSpanElement

  logoutBtn.classList.add("hearder-text")
  mypageBtn.classList.add("hearder-text")


  //회원가입을 my Page로 변경
  if (loginStatus) {
    logoutBtn.innerText = "log-out"
    logoutchange.replaceWith(logoutBtn)
    logoutBtn.onclick = (e: Event) => {
      alert("로그아웃 되었습니다.")
      sessionStorage.clear()
      location.reload()
    }
    mypageBtn.innerText = "myPage"
    mypagechange.replaceWith(mypageBtn)
    mypageBtn.onclick = (e: Event) => {
      location.href = "../html/mypage.html"
    }

  }


}

changeLogout()

// header Nav



const product1 = document.querySelector("#product1") as HTMLSpanElement
const headerNav = document.querySelector("#headerNav") as HTMLDivElement;
const blur_ = document.querySelector('#blur') as HTMLDivElement

product1.addEventListener("mouseenter", (e) => {
  headerNav.style.display = "block"
})

product1.addEventListener("mouseleave", (e) => {
  headerNav.style.display = "none"
})

blur_.addEventListener("mouseover", (e) => {
  headerNav.style.display = "block"
})

blur_.addEventListener("mouseleave", (e) => {
  headerNav.style.display = "none"
})



// document.addEventListener("mouseover", (e) => {
//   if ((e.target as HTMLElement).classList.contains("hearder-text")) {
//     headerNav.style.display = "block"
//   }
// })
// document.addEventListener("mouseleave", (e) => {

//   if ((e.target as HTMLElement).classList.contains("hearder-text")) {
//     console.log(e.target);
//     headerNav.style.display = "none"
//   }
// })