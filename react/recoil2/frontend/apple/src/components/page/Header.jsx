import React from 'react'
import { FooterHome, HeaderText, HeaderWrap } from '../style/Header.styled'

const Header = () => {
  return (
    <HeaderWrap>
      <FooterHome to="/main" />
      <HeaderText >Store</HeaderText>
      <HeaderText to="/signin">SignIn</HeaderText>
    </HeaderWrap>
  )
}

export default Header