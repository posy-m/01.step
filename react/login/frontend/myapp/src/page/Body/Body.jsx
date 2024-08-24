import React from 'react'
import Main from '../Main/Main'
import { BodyDim } from './Body.styled'
import { Route, Routes } from 'react-router-dom';
import Join from '../Join/Join';
import Login from '../Login/Login';

const Body = () => {
  return (
    <BodyDim >
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BodyDim>
  )
}

export default Body
