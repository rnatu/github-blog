import { useEffect, useState } from 'react';
import { Text, Title } from '../../components/Typography';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { BlogContainer, PostsContainer, PublicationsHeader } from './styles';
import { api } from '../../lib/axios';

interface PostData {
  id: number;
  repository_url: string;
  title: string;
  body: string;
}

export function Blog() {
  const githubUserName = 'rnatu';
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
  }, []);

  return (
    <>
      <BlogContainer>
        <Profile githubUserName={githubUserName} />

        <PublicationsHeader>
          <Title size="s" color="subtitle">
            Publicações
          </Title>
          <Text size="s" color="span">
            {6} publicações
          </Text>
        </PublicationsHeader>

        <SearchInput />

        <PostsContainer>
          {postData.map((post: PostData) => (
            <Post key={post.id} />
          ))}
        </PostsContainer>
      </BlogContainer>
    </>
  );
}
