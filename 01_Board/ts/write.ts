
// 받는 데이터
// interface Iwrite {
//   title: string,
//   content: string,
// }

// 순서 정리해보기
// 1. 글을 작성하면 로컬스토리지에 담는다.
// 2. 게시 버튼을 누르면 저장된채로 boardlist.html으로 이동

const _delete = document.querySelector(".del") as HTMLButtonElement
const upload = document.querySelector(".upload") as HTMLButtonElement




// 취소 누를 시 boardlist로 이동
_delete.addEventListener("click", () => {
  location.href = "./boardlist.html"
})



// 게시 버튼 누를 시 동작
upload.addEventListener("click", () => {
  if (!confirm("작성을 완료하시겠습니까?"))
    return;

  const title = (document.querySelector("#writeTitle") as HTMLInputElement).value
  const content = (document.querySelector("#writeContent") as HTMLTextAreaElement).value;
  const tc = {
    title,
    content,
    nickname: JSON.parse(sessionStorage.getItem("signupInfo")).nickname
  }
  let arr = [tc]
  const local = JSON.parse(localStorage.getItem("contentData")) || []
  local.push(tc)
  const data = localStorage.setItem("contentData", JSON.stringify(local))
  console.log(data);
  location.href = "./boardlist.html"
})






