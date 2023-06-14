import { styled } from 'styled-components';

export const PostContentContainer = styled.section`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  h1,
  h2 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  h3,
  h4 {
    margin-top: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;
    border-radius: 2px;
    margin-top: 1.5rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
