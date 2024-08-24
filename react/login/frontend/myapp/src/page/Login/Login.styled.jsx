import styled from 'styled-components';
import check2 from '../../img/check2.jpeg'


export const LoginDim = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  background-image: url(${check2});
  background-repeat: no-repeat;
  background-size: cover;
`

export const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: 500;

`

// 타원 투명도
export const LoginTransparency = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: rgba(255, 238, 226, 0.8);
  filter: blur(10px);
  position: relative;
  box-shadow: 0px 0px 10px rgb(207, 207, 207);
  display: flex;
  flex-direction: column;
`

export const LoginInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 2px 3px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background: transparent;
  `

export const LoginButton = styled.button`
  width: 310px;
  height: 40px;
  background-color: rgb(216,73,50);
  color: rgb(255, 238, 226);
  border: none;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
`

export const LoginInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: max-content;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%
  /* left: ${(props => props.width)} */
`