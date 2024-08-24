import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { joinUser } from '../../action/join.action'
import { JoinDim, JoinInput, Transparency, InputWrap, JoinTitle, JoinButton } from './Join.styled'

const Join = () => {
  const joinName = useRef("")
  const joinId = useRef("")
  const joinpassword = useRef("");

  // reducer를 사용 === setState
  const dispatch = useDispatch();

  // location.href 와 같은 역할
  const use = useNavigate()

  const joinHandler = (e) => {
    // console.log(joinName.current.value);
    const name = joinName.current.value
    const uid = joinId.current.value
    const upw = joinpassword.current.value;

    dispatch(joinUser({ name, uid, upw }))
    // dispatch({ type: "회원가입", payload: { name, uid, upw } })
    alert("회원가입이 완료가 됐습니다.")
    use("/login")
  }

  return (
    <JoinDim>
      <Transparency></Transparency>
      <InputWrap>
        <JoinTitle>회원가입</JoinTitle>
        <JoinInput ref={joinName} placeholder='이름을 입력해주세요' />
        <JoinInput ref={joinId} placeholder='아이디를 입력해주세요' />
        <JoinInput ref={joinpassword} type="password" placeholder='비밀번호를 입력해주세요' />
        <JoinButton onClick={joinHandler}>회원가입</JoinButton>
      </InputWrap>
    </JoinDim>
  )
}

export default Join


