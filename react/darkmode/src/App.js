import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProviderWrapper, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <Header />
    </ThemeProviderWrapper>
  );
}

export default App;
