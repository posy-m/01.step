interface IMainpage {

}
let target = document.querySelector("#dynamic") as HTMLParagraphElement


function randomString() {

  let stringArr = ["I love Apple", "cheer up", "Just do it", "Can do", "Try your best"]
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selectStringArr = selectString.split("");

  return selectStringArr;

}

//타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString())
}


//한글자식 텍스트 출력 함수
function dynamic(randomArr: any) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000)
  }
}

dynamic(randomString())


//커서 깜박임 효과
function blink() {
  target.classList.toggle("active")
}
setInterval(blink, 500)

