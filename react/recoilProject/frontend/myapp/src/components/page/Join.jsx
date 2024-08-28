import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { JoinBtn, JoinInput, JoinText, JoinWrap } from './styled'


const Join = () => {
  const [uidInput, setUidInput] = useState("")
  const [upwInput, setUpwInput] = useState("")
  const nav = useNavigate()


  const hansdlerJoin = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/login/join', { uid: uidInput, upw: upwInput })
    if (response.status === 201) nav("/Login")
  }

  const uidInputHandler = (e) => {
    setUidInput(e.target.value)
  }
  const upwInputHandler = (e) => {
    setUpwInput(e.target.value)
  }



  return (
    <JoinWrap onSubmit={hansdlerJoin}>
      <JoinText>회원가입</JoinText>
      <JoinInput type="text" name='uid' value={uidInput} onChange={uidInputHandler} placeholder='아이디를 입력해주세요' />
      <JoinInput type="password" name="upw" value={upwInput} onChange={upwInputHandler} placeholder='패스워드를 입력해주세요' />
      <JoinBtn>회원가입</JoinBtn>
    </JoinWrap>
  )
}

export default Join
