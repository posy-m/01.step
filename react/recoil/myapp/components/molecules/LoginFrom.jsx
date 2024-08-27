import React from 'react'
import { useState } from 'react'
import { useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil'
import { LgoinCheck, Login } from '../recoil/CountAtom'

const LoginFrom = () => {
  const [uidInput, setUidInput] = useState("")
  const [upwInput, setUpwInput] = useState("")

  //useRecoilValue : value만 반환해주는 hook
  const loginState = useRecoilValue(Login)
  // setLoginStae : value, setState가 둘다 필요한 경우
  const setLoginState = useSetRecoilState(Login)
  // loadableLoginState: 비동기 데이터를 처리할 때 처리 상태를 함께 리턴해주어서 비동기 데이터 상태에 따라 여러가지 로직을 제어할 수 있도록 해준다.
  const loadableLoginState = useRecoilValueLoadable(LgoinCheck);
  //useResetRecoilState : atom의 값을 초기화 하고 싶을 경우
  // ex ) 설문조사 입력 팝업을 닫았을대 상태를 초기화 해주고 싶을 경우
  const resetLoginState = useResetRecoilState(Login)

  const handlerLogin = (e) => {
    e.preventDefault();
    const { uid, upw } = e.target;
    setLoginState({ uid: uidInput, upw: upwInput })
  }

  const uidInputHandler = (e) => {
    setUidInput(e.target.value)
  }
  const upwInputHandler = (e) => {
    setUpwInput(e.target.value)
  }


  return (
    <div>
      <form action="">
        <label htmlFor="">아이디</label>
        <input type="text" name='uid' value={uidInput} onChange={uidInputHandler} />
        <label htmlFor="">비밀번호</label>
        <input type="password" name='upw' value={upwInput} onChange={upwInputHandler} />
        <button>로그인</button>
      </form>
    </div>
  )
}

export default LoginFrom
