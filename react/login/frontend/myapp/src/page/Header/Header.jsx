import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderDim } from './Header.styled'


const Header = () => {
  const state = useSelector(state => state)
  const use = useDispatch()
  const logOut = () => {

    use({ type: "로그아웃" })
  }

  if (state.isLogin) {
    return (
      <HeaderDim>
        <Link to="/">홈</Link>
        <Link >마이페이지</Link >
        <div onClick={logOut} >로그아웃</div >
        <div>yourId : {state.uid}</div>
      </HeaderDim>
    )
  }


  return (
    <HeaderDim>
      <Link to="/">홈</Link>
      <Link to="/join">회원가입</Link >
      <Link to="/login">로그인</Link >
    </HeaderDim>
  )
}

export default Header
