import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <BrowserRouter>

          <Routes />
          </BrowserRouter>

        </Container>
      </ThemeProvider>
  );
}

export default App;
