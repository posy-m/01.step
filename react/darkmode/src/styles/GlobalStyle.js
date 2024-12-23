import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;
