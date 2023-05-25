import { styled } from 'styled-components';

export const Publications = styled.div`
  max-width: 54rem;
  margin: 4.6875rem auto 0;
`;

export const PublicationsHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const PostsContainer = styled.main`
  margin-top: 3rem;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  grid-gap: 2rem;
`;
