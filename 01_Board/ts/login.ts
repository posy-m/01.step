interface IUserInfo {
  adress: string,
  password: string
}

//로그인 페이지에서는 로컬스토리지랑 세션스토리지를 비교를 해야한다!!! 


const loginBox = document.querySelector("#loginBox")
let a = ""
loginBox.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let loginEmail = document.querySelector("#loginEmail") as HTMLInputElement
  let loginPassword = document.querySelector("#loginPassword") as HTMLInputElement

  const localInfo = JSON.parse(localStorage.getItem("signupInfo"))

  localInfo.forEach(info => {
    if (info.adress === loginEmail.value && info.password === loginPassword.value) {
      sessionStorage.setItem("signupInfo", JSON.stringify(info))
      alert("환영합니다.")
      location.href = "../html/mainpage.html";
      a = "true"
      return
    }
  });
  if (a !== "true") {

    mistake()
  }

})


// 다시 확인해 보기
function mistake() {
  const localInfo = JSON.parse(localStorage.getItem("signupInfo"))
  const loginEmail = document.querySelector("#loginEmail") as HTMLInputElement
  const loginPassword = document.querySelector("#loginPassword") as HTMLInputElement

  if (localInfo.adress !== loginEmail.value && localInfo.password !== loginPassword.value) {
    alert("이메일 또는 비밀번호를 다시 확인해 주세요.")
  };

}