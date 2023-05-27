import { Header } from '../../components/Header';
import { Text, Title } from '../../components/Typography';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { BlogContainer, PostsContainer, PublicationsHeader } from './styles';

export function Blog() {
  return (
    <>
      <Header />

      <BlogContainer>
        <Profile />

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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsContainer>
      </BlogContainer>
    </>
  );
}
