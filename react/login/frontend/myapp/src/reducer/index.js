const initialState = {
  // user: [],
  name: '',
  uid: '',
  isLogin: false
}
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "회원가입":
      return {
        ...state,
        // user: [...state.user, payload], // 새로운 유저 추가
      };

    case "로그인":
      return {
        ...state,
        name: payload.name, // 로그인한 유저의 이름
        uid: payload.uid,   // 로그인한 유저의 uid
        isLogin: true,      // 로그인 상태로 변경
      };

    case "로그아웃":
      return {
        ...state,
        name: '',           // 이름 초기화
        uid: '',            // uid 초기화
        isLogin: false,     // 로그아웃 상태로 변경
      };

    default:
      return state;
  }
};

export default reducer;

// const reducer = (state = initalState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "회원가입":
//       return { ...state, user: [...state.user, payload] }
//     case "로그인":
//       return { ...state, user: [...state.user, payload] }
//     case "로그아웃":
//       return { ...state, user: [...state.user, payload] }
//     default:
//       return state
//   }
// }


// const initalState = {
//   user: [{ uid: "1", upw: 1 }, { uid: "1", upw: 1 }, { uid: "1", upw: 1 }],
//   isLogin: false
// }

// {...state, user: [...state.array, { uid: "", upw: "" }] }

// const reducer = (state = initalState, action) => {
//   // {...state} // {user: [], islogin: false}
//   // {...state, user: [...state.user, {uid: "", upw: ""}]}
//   // {user: [], islogin: false, user: [...state.user, payload]}
//   const { type, payload } = action;

//   switch (type) {
//     case "상수":
//       return { ...state, user: [...state.array, { uid: "", upw: "" }] }
//     default:
//       return state;
//   }
// }