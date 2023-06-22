import { styled } from 'styled-components';

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  border-radius: 10px;
  height: 16.25rem;

  &:hover {
    outline: ${({ theme }) => theme.colors['base-label']} solid 2px;
    cursor: pointer;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: 64px;

  h1 {
    flex: 1;
    line-height: 160%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const PostDescription = styled.div`
  * {
    font-size: 1rem;
    font-weight: 300;
    line-height: 160%;
  }

  margin-top: 1.25rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
