import { atom, selector } from 'recoil'

export const JoinState = atom(
  {
    key: "userInfo",
    default: {
      isLogin: false
    }
  }
)

// export const LoginState = selector({
//   ket: "login",
//   get: ({ get }) => {
//     const [checkLogin] = get(JoinState)
//   },
//   //set : 조회하거나 가져오는 용도
//   set: ({ }) => {
//   }
// })