import { styled } from 'styled-components';

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  border-radius: 10px;

  /* width: 416px; */
  height: 16.25rem;
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const PostDescription = styled.div`
  > p {
    margin-top: 1.25rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
