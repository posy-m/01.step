import { atom, selector } from 'recoil'

// 
export const userState = atom(
  {
    key: "userInfo",
    default: {
      user: '',
      isLogin: false
    }
  }
)

// 상태확인
export const isLoggedInSelector = selector({
  key: 'isLoggedInSelector',
  get: ({ get }) => {
    const user = get(userState);
    return user.isLoggedIn;
  },
});


// 사용자 이름
export const usernameSelector = selector({
  key: 'usernameSelector',
  get: ({ get }) => {
    const user = get(userState);
    return user.username;
  },
});
