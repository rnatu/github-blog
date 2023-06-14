import { styled } from 'styled-components';

export const PostContentContainer = styled.section`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
