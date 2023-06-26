import styled from 'styled-components';

export const PostInfoContainer = styled.header`
  max-width: 54rem;
  margin: -5.25rem auto 0;

  padding: 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-profile']};

  h1 {
    margin-top: 1.25rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
    }
  }
`;
