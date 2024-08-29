import styled from "styled-components"
import { Link } from 'react-router-dom'
import applelogo from '../img/apple.png'

export const FooterHome = styled(Link)`
width: 30px;
height: 30px;
background-image: url(${applelogo});
background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
`

export const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color:rgb(19,19,19);;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 1;
  position: relative;
`

export const HeaderText = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: rgb(187,187,187);
`

