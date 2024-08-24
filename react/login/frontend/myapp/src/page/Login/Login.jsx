import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginDim, LoginTransparency, LoginInputWrap, LoginTitle, LoginInput, LoginButton } from './Login.styled'

const Login = () => {
  // reduser에서 state를 받아옴
  const state = useSelector(state => state)

  const dispatch = useDispatch()
  const use = useNavigate()

  // 생명주기 상태
  // useEffect(() => {
  //   console.log(state.isLogin);
  // }, [state.isLogin])

  //로그인 버튼을 클릭 시 로직

  const loginId = useRef()
  const loginPassword = useRef()

  const loginBtn = async () => {
    const uid = loginId.current.value
    const upw = loginPassword.current.value

    const response = await axios.post('http://localhost:3000/react/findlogin', { uid, upw })
    // console.log(response.data);

    if (response.data) {
      dispatch({ type: "로그인", payload: { uid } });
      alert("로그인이 되었습니다.")
      use("/")
    } else {
      alert("아이디나 비밀번호를 확인해주세요")
    }

    // 배열
    // const stateUserId = state.user
    // const data = stateUserId.find(e => e.uid === uid && e.upw === upw);
    // if (!data) return alert("아이디나 비밀번호를 확인해주세요");
    // alert("로그인이 되었습니다.")
    // dispatch({ type: "로그인", payload: { uid } })
    // use("/")
  }


  return (
    <LoginDim>
      <LoginTransparency></LoginTransparency>
      <LoginInputWrap>
        <LoginTitle>로그인</LoginTitle>
        <LoginInput ref={loginId} placeholder='아이디를 입력해주세요' />
        <LoginInput ref={loginPassword} type="password" placeholder='비밀번호를 입력해주세요' />
        <LoginButton onClick={loginBtn}>로그인</LoginButton>
      </LoginInputWrap>
    </LoginDim>
  )
}

export default Login
