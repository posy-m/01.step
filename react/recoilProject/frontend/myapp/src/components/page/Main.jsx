import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { ImgBackground, InputBox, LinkTag, MainPageWrap, MainText, SignupBox } from './styled';

const Main = () => {
  return (
    <MainPageWrap>
      <MainText>더욱빠른 결제를 원하시면 회원가입 후 로그인 하세요.</MainText>
      <InputBox>
        <SignupBox >
          <LinkTag to="/Join">SignUp</LinkTag>
        </SignupBox>
        <SignupBox >
          <LinkTag to="/Login">SignIn</LinkTag>
        </SignupBox>
      </InputBox>
    </MainPageWrap>
  )
}

export default Main
