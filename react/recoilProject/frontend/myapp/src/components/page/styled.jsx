import { Link } from 'react-router-dom'
import styled from "styled-components"
import pot from '../img/dgaucl1huw70.png'

// Center
export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eff2f9;
`


// MainImg
export const BackGround = styled.div`
width: 100%;
height: 100%;
background-color: rgb(219,219,219);
`

export const ImgBackground = styled.div`
width: 400px;
height: 450px;
background-image: url(${pot});`

// Main
export const MainPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MainText = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`
export const InputBox = styled.div`
  display: flex;
  gap :80px;
`

export const SignupBox = styled.div`
display: flex;
`

export const LinkTag = styled(Link)`
margin-top: 30px;
width: 300px;
height: 300px;
/* border: 1px solid #ffff; */
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: -6px -6px 10px rgba(255,255,255,0.45), 6px 6px 10px rgba(94,104,121,0.3);
font-size: 26px;
text-decoration: none;
color: rgba(56,56,56,0.5);
font-weight: 600;
&:hover {
  box-shadow: inset 6px 6px 10px rgba(255,255,255,0.45), inset -6px -6px 10px rgba(94,104,121,0.3);
  font-size: 30px;
  text-decoration: none;
  color: rgb(56,56,56);
  font-weight: 800;
}
`

// 회원가입
export const JoinWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  margin-top: 300px;
`
export const JoinText = styled.div`
  font-size: 26px ;
  font-weight: 600;
  margin-bottom: 20px;
`

export const JoinInput = styled.input`
  border: 1px solid rgba(56,56,56,0.5);
  border-radius: 5px;
  width: 300px;
  height: 30px;
  padding: 3px 10px;
  `

export const JoinBtn = styled.button`
margin-top: 10px;
  border: none;
  width: 330px;
  height: 35px;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 600;
`








