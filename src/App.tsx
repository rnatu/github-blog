import { Blog } from './Pages/Blog';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Blog />
      </ThemeProvider>
    </>
  );
}

export default App;
