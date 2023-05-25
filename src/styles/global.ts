import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme.colors['base-background']}; 
    color: ${(props) => props.theme.colors['base-text']};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    transition: .3s;

    &:disabled {
      cursor: not-allowed;
    }
  }
  
  h1, h2, h3, h4, h5, h6 p, span {
    line-height: 130%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['brand-blue']};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: red
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: red
  }
`;
