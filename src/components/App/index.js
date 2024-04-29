import GlobalStyles from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';

import ToastContainer from '../Toast/ToastCotainer';

function App() {
  const [messages, setMessages] = useState([
    { id: Math.random, type: 'default', text: 'Default text'},
    { id: Math.random, type: 'danger', text: 'Danger text'},
    { id: Math.random, type: 'success', text: 'Success text'}

  ])

  function toast({ type, text}){
    setMessages()
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer />
        <Container>
        <Header />

        <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
