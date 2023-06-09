import { styled } from 'styled-components';

export const BlogContainer = styled.main`
  max-width: 55rem;
  padding: 0 1rem;

  margin: 0 auto;
`;

export const PublicationsHeader = styled.header`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
`;

export const PostsContainer = styled.section`
  margin: 3rem 0;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem;
`;
