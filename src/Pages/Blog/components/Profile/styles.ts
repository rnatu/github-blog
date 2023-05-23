import { styled } from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
`;

export const Avatar = styled.img`
  width: 9.25rem;
  border-radius: 8px;
`;

export const UserInfoContainer = styled.div`
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
