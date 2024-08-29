import styled from "styled-components"
import applegif from "../img/applegif.gif"
import start from "../img/startGif.gif"

export const BodyGifWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color:rgb(19,19,19);
`

export const BodyGifImg = styled.div`
  width: 200px ;
  height: 200px;
  background-image: url(${applegif});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  /* margin-top: 30px; */
`

export const GifText = styled.div`
  color: rgb(242,242,245);
  font-size: 30px;
  margin-top: 10px ;
  font-weight: 600;
  `
export const GifSmallText = styled.div`
  margin-top: 5px ;
  color: rgb(242,242,245);
  font-size: 15px;
  margin-bottom : 100px 
`