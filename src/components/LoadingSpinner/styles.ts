import { styled } from 'styled-components';

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 5px solid ${({ theme }) => theme.colors['brand-blue']};
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: rotation 1s linear infinite;

  margin: 8rem auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
