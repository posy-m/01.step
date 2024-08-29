import styled from "styled-components"
import iphone from "../img/iphone15.png"
import iphone1 from "../img/iphone1.png"
import { ScrollContainer, ScrollPage } from 'react-scroll-motion';


export const BodyScrollWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:rgb(19,19,19);
  /* overflow: hidden; */
`


export const Section3 = styled.div`
background-color: rgb(242,242,245);
height: 400px;
width: 300vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden; /* 자식 요소가 영역을 벗어나지 않도록 설정 */

`

// h1
export const ScrollH1 = styled.h1`
margin-top: 400px;
margin-bottom: 8px; /* h1 아래의 간격을 줄임 */
  color: rgb(242,242,245);;
`
// h2
export const ScrollH2 = styled.h2`
margin-top: 0; /* h2 위의 간격을 없앰 */
  color: rgb(242,242,245);;
`

// centerdiv
export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


// 네모 박스
export const Checkbox = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`

export const Check = styled.img`
background-image: url(${(props) => props.img});
  /* background-image: url(${iphone}); */
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 20px;
  width: 230px;
  height: 280px;
  /* border: none !important;  */
  /* border: 1px solid rgb(19,19,19);; */
  /* border-radius: 30px; */
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
`
