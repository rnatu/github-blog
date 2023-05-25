import { styled } from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 54rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-profile']};

  margin: -84px auto 0;
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 100%;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > p {
    margin-top: 0.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.125rem;
    }
  }
`;
