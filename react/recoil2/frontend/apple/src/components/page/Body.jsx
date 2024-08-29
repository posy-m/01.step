import React from 'react'
import { BodyWrap } from '../style/Body.styled'
import BodyGif from './body/BodyGif'
import BodyScroll from './body/BodyScroll'
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import SiginUp from './SiginUp';
import SignIn from './SignIn';
import Header from './Header';

const Body = () => {
  return (
    <BodyWrap>

      <BodyGif />
      <BodyScroll />

    </BodyWrap>
  )
}

export default Body
