import { useEffect, useState } from 'react';

import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { BlogContainer, PostsContainer, PublicationsHeader } from './styles';
import { Text, Title } from '../../components/Typography';
import { PostData } from '../../interfaces/PostData';
import { api } from '../../lib/axios';

export function Blog() {
  const githubUserName = import.meta.env.VITE_GITHUB_USERNAME;
  const [postData, setPostData] = useState<PostData[]>([]);

  useEffect(() => {
    async function getPosts() {
      const query = `user:${githubUserName} repo:github-blog`;

      const { data } = await api.get('/search/issues', {
        params: {
          q: query,
        },
      });

      const filteredIssues: PostData[] = data.items.filter(
        (issue: PostData) =>
          issue.repository_url ===
          'https://api.github.com/repos/rnatu/github-blog',
      );

      setPostData(filteredIssues);
    }

    getPosts();
  }, [githubUserName]);

  return (
    <>
      <BlogContainer>
        <Profile githubUserName={githubUserName} />

        <PublicationsHeader>
          <Title size="s" color="subtitle">
            Publicações
          </Title>
          <Text size="s" color="span">
            {postData.length} publicações
          </Text>
        </PublicationsHeader>

        <SearchInput />

        <PostsContainer>
          {postData.map((post: PostData) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.body}
              postNumber={post.number}
            />
          ))}
        </PostsContainer>
      </BlogContainer>
    </>
  );
}
