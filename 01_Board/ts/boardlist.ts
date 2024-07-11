interface IboardList {
  title: string,
  content: string,
  nickname: string
}

function createE() {

  const getlocal = JSON.parse(localStorage.getItem("contentData"))

  const listWrap = document.querySelector("#painWrap")
  listWrap.innerHTML = "";
  getlocal.forEach((e: IboardList, index: number) => {

    const _ul = document.createElement("ul") as HTMLUListElement
    const _li1 = document.createElement("li") as HTMLLIElement
    const _li2 = document.createElement("li") as HTMLLIElement
    const _li3 = document.createElement("li") as HTMLLIElement
    const _li4 = document.createElement("li") as HTMLLIElement
    const _li5 = document.createElement("li") as HTMLLIElement
    _li1.append((index + 1) + "")
    // === _li1.append(`${index+1}`)
    _li2.append(e.title)
    _li2.addEventListener("click", () => {
      location.href = "./title.html?index=" + index
    })
    _li3.append(e.nickname)
    _li4.innerText = "🔮"
    _li4.addEventListener("click", () => {
      //getlocal를 안가져오는 이유는 배열 우리가 쓰려는 건 {} 객체

      // 어떻게 데이터를 전달해줄것인가?
      location.href = "./update.html?index=" + index
    })


    _li5.innerText = "❌"
    _li5.addEventListener("click", (e) => {
      getlocal.splice(index, 1)
      localStorage.setItem("contentData", JSON.stringify(getlocal))
      createE()
    })
    // 두번째 방법
    // _li5.addEventListener("click", (e) => {

    //   const arr = []
    //   for (let i = 0; i < getlocal.length; i++) {
    //     if (index === i) {
    //       continue;
    //     }
    //     arr.push(getlocal[i])
    //   }
    //   localStorage.setItem("contentData", JSON.stringify(arr))
    //   createE()

    // })

    _ul.append(_li1, _li2, _li3, _li4, _li5)
    // console.log(ulTag);

    listWrap.append(_ul)


  })
}
createE()