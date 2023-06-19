import React from 'react';
import ReactDOM from 'react-dom/client';
import { Heading } from './components/Heading';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
