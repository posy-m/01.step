interface ISignup {
  adress: string,
  password: string,
  nickname: string,
  gender: string
}


//이메일, 비밀번호 확인 onkeyup
function setting() {
  // const emailAdress = document.getElementById("emailAdress") as HTMLInputElement
  // const emailAdressCheck = document.getElementById("emailAdressCheck") as HTMLInputElement
  // const emailCheckBox = document.querySelector("#emailCheckBox") as HTMLDivElement;
  // const emailCheckText = document.createElement("p")
  // const fonststyle = emailCheckText.classList.add("emailText")
  // //emailAdressCheck.append(emailCheckText)


  let str = ""
  // emailAdressCheck.onkeyup = (e: Event) => {
  //   const target = e.target as HTMLInputElement
  //   if (emailAdress.value === target.value) {
  //     str = '일치합니다.'
  //     target.style.borderColor = 'green'
  //   } else {
  //     str = '다시 확인해주세요.'
  //     target.style.borderColor = 'red'
  //   }
  //   emailCheckText.innerHTML = str;
  //   emailCheckBox.append(emailCheckText);
  // }

  //비밀번호 확인
  const passwordCheckBox = document.getElementById("passwordCheckBox") as HTMLDivElement
  const password = document.getElementById("password") as HTMLInputElement
  const passwordCheck = document.getElementById("passwordCheck") as HTMLInputElement
  const passwordBox = document.createElement("p")
  passwordBox.classList.add("smallText")

  passwordCheck.onkeyup = (e) => {
    const target = e.target as HTMLInputElement
    if (target.value === password.value) {
      str = '일치합니다.'
      target.style.borderColor = 'green'
    } else {
      str = '다시 확인해주세요'
      target.style.borderColor = 'red'
    }
    passwordBox.innerHTML = str;
    passwordCheckBox.append(passwordBox)
  }

}

setting()


//버튼 클릭 시 작동
const createAccoutnBtn = document.querySelector("#createAccoutnBtn")

function submitBtn(e: Event) {
  e.preventDefault();
  let userData: ISignup[] = JSON.parse(localStorage.getItem("signupInfo"))
  if (!userData) {
    userData = [];
  } else {
    userData = JSON.parse(localStorage.getItem("signupInfo"))
  }

  //이메일
  const emailAdress = document.getElementById("emailAdress") as HTMLInputElement
  const emailAdressCheck = document.getElementById("emailAdressCheck") as HTMLInputElement
  let emailCheckBox = document.querySelector("#emailCheckBox") as HTMLDivElement;
  let emailCheckText = document.createElement("p")
  emailCheckText.classList.add("smallText")

  //패스워드
  const password = document.getElementById("password") as HTMLInputElement
  const passwordCheck = document.getElementById("passwordCheck") as HTMLInputElement

  //닉네임
  const nickName = document.getElementById("nickName") as HTMLInputElement
  let nicknameText = document.getElementById("nicknameText") as HTMLParagraphElement
  let nicknameCheckBox = document.getElementById("nicknameCheckBox") as HTMLDivElement

  //성별확인
  const genderChoice = document.getElementById("genderChoice") as HTMLSelectElement


  let str = ""
  let check = true;

  //유효성 검사


  for (let i = 0; i < userData.length; i++) {
    //이메일 확인
    if (userData[i].adress === emailAdressCheck.value) {
      str = '존재하는 이메일주소가 있습니다.'
      emailAdressCheck.style.borderColor = 'red';
      check = false;

    }
    //panit
    if (emailCheckBox.childNodes.length > 2) {
      emailCheckBox.childNodes[emailCheckBox.childNodes.length - 1].remove()
      emailCheckText.innerHTML = str;
      emailCheckBox.append(emailCheckText);
    }

    //닉네임
    if (userData[i].nickname === nickName.value) {
      const nicknameText = document.getElementById("nicknameText") as HTMLParagraphElement
      str = "동일 아이디가 존재합니다."
      nicknameText.innerText = str;
      check = false;
    }

    //성별


  }

  const a = nullCheck();

  if (a && check) {
    const information = {
      adress: emailAdressCheck.value,
      password: password.value,
      nickname: nickName.value,
      gender: genderChoice.value
    }
    userData.push(information)
    localStorage.setItem("signupInfo", JSON.stringify(userData))

    location.href = "../html/mainpage.html";

  }
  removeText()

}


createAccoutnBtn.addEventListener("click", submitBtn)


function nullCheck(): boolean {
  const _input = document.querySelectorAll("input") as NodeList;
  const _select = document.querySelector("#genderChoice") as HTMLSelectElement;
  let check = true;
  _input.forEach((el: HTMLInputElement) => {
    if (el.value === '' && !check && _select.value === "") {
      alert("필수값을 모두 입력해주세요");
      check = false;
    }
  })


  if (_select.value.trim() === "") {
    alert("필수값을 모두 입력해주세요");
    check = false;
  }

  return check;
}

function removeText() {
  const _input = document.querySelectorAll("input") as NodeList;
  _input.forEach((remove: HTMLInputElement) => {
    remove.value = ""

  })



}



  //객체를 만들었지만 클래스로도 사용할 수 있다.





