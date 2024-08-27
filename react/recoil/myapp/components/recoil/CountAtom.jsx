import { atom, selector } from 'recoil';

export const countState = atom(
  {
    key: "count",
    default: {
      num: 0,
      name: "pageCount"
    }
  }
)

export const paginationState = selector({
  key: "pagination",
  get: ({ get }) => {
    const { num } = get(countState);
    return `gage${num} 번째야`
  },
  set: ({ set, get }, newState) => {
    const { num, name } = get(countState);
    set(countState, { num: num + 1, name })
  }
})

export const Login = atom({
  key: "Login",
  default: {
    uid: "",
    upw: ""
  }
})

export const LgoinCheck = selector({
  key: "LoginCheck",
  get: async ({ get }) => {
    const data = await new Promise((res, rej) => {
      const { uid, upw } = get(Login)
      const user = { uid: "123", upw: "123" }
      if (user.uid === uid && user.upw === upw) {
        setTimeout(() => {
          res("로그인 성공");
        }, 3000)
      } else rej("로그인 실패")
    })
    return data
  }
})