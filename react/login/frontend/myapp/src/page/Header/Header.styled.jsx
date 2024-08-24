import styled from "styled-components"

export const HeaderDim = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: rgb(27,24,106);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  & > a{  
    color: rgb(255, 238, 226);
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
  }

  & > div {
  color: rgb(255, 238, 226);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  }
`

