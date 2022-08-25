import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/themes/main';

import { WidthProvider } from 'contexts/width';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
declare global {
  interface Window {
    kleverWeb: any;
  }
}
const App: React.FC = () => (
  <WidthProvider>
    <ThemeProvider theme={dark}>
      <ToastContainer autoClose={2000} position="top-right" />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </WidthProvider>
);

export default App;
