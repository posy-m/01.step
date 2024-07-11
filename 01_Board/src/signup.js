function setting() {
    let str = "";
    const passwordCheckBox = document.getElementById("passwordCheckBox");
    const password = document.getElementById("password");
    const passwordCheck = document.getElementById("passwordCheck");
    const passwordBox = document.createElement("p");
    passwordBox.classList.add("smallText");
    passwordCheck.onkeyup = (e) => {
        const target = e.target;
        if (target.value === password.value) {
            str = '일치합니다.';
            target.style.borderColor = 'green';
        }
        else {
            str = '다시 확인해주세요';
            target.style.borderColor = 'red';
        }
        passwordBox.innerHTML = str;
        passwordCheckBox.append(passwordBox);
    };
}
setting();
const createAccoutnBtn = document.querySelector("#createAccoutnBtn");
function submitBtn(e) {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("signupInfo"));
    if (!userData) {
        userData = [];
    }
    else {
        userData = JSON.parse(localStorage.getItem("signupInfo"));
    }
    const emailAdress = document.getElementById("emailAdress");
    const emailAdressCheck = document.getElementById("emailAdressCheck");
    let emailCheckBox = document.querySelector("#emailCheckBox");
    let emailCheckText = document.createElement("p");
    emailCheckText.classList.add("smallText");
    const password = document.getElementById("password");
    const passwordCheck = document.getElementById("passwordCheck");
    const nickName = document.getElementById("nickName");
    let nicknameText = document.getElementById("nicknameText");
    let nicknameCheckBox = document.getElementById("nicknameCheckBox");
    const genderChoice = document.getElementById("genderChoice");
    let str = "";
    let check = true;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].adress === emailAdressCheck.value) {
            str = '존재하는 이메일주소가 있습니다.';
            emailAdressCheck.style.borderColor = 'red';
            check = false;
        }
        if (emailCheckBox.childNodes.length > 2) {
            emailCheckBox.childNodes[emailCheckBox.childNodes.length - 1].remove();
            emailCheckText.innerHTML = str;
            emailCheckBox.append(emailCheckText);
        }
        if (userData[i].nickname === nickName.value) {
            const nicknameText = document.getElementById("nicknameText");
            str = "동일 아이디가 존재합니다.";
            nicknameText.innerText = str;
            check = false;
        }
    }
    const a = nullCheck();
    if (a && check) {
        const information = {
            adress: emailAdressCheck.value,
            password: password.value,
            nickname: nickName.value,
            gender: genderChoice.value
        };
        userData.push(information);
        localStorage.setItem("signupInfo", JSON.stringify(userData));
        location.href = "../html/mainpage.html";
    }
    removeText();
}
createAccoutnBtn.addEventListener("click", submitBtn);
function nullCheck() {
    const _input = document.querySelectorAll("input");
    const _select = document.querySelector("#genderChoice");
    let check = true;
    _input.forEach((el) => {
        if (el.value === '' && !check && _select.value === "") {
            alert("필수값을 모두 입력해주세요");
            check = false;
        }
    });
    if (_select.value.trim() === "") {
        alert("필수값을 모두 입력해주세요");
        check = false;
    }
    return check;
}
function removeText() {
    const _input = document.querySelectorAll("input");
    _input.forEach((remove) => {
        remove.value = "";
    });
}
