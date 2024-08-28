import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { JoinState } from '../atom/UserAtom'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { JoinBtn, JoinInput, JoinText, JoinWrap } from './styled'

const Login = () => {
  const uidInput = useRef("")
  const upwInput = useRef("")

  const [atom, setAtom] = useRecoilState(JoinState)


  const handlerLogin = async (e) => {
    e.preventDefault()
    try {
      const respones = await axios.post("http://localhost:4000/login/login", { uid: uidInput.current.value, upw: upwInput.current.value },
        { withCredentials: true })
      console.log(respones);
      if (respones.status === 201) {
        setAtom({ ...atom, isLogin: true })
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    console.log(atom.isLogin);
  }, [atom.isLogin])

  return (
    <JoinWrap onSubmit={handlerLogin}>
      <JoinText>로그인</JoinText>
      <JoinInput type="text" ref={uidInput} placeholder='아이디를 입력해주세요' />
      <JoinInput type="text" ref={upwInput} placeholder='비밀번호를 입력해주세요' />
      <JoinBtn>로그인</JoinBtn>
    </JoinWrap>
  )
}

export default Login
