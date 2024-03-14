import GlobalStyles from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';
import Header from '../Header';
import ContactsList from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Header />
      <Container>
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
