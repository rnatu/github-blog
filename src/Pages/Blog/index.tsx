import { Header } from '../../components/Header';
import { Text, Title } from '../../components/Typography';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { Publications, PublicationsHeader } from './styles';

export function Blog() {
  return (
    <>
      <Header />
      <Profile />

      <Publications>
        <PublicationsHeader>
          <Title size="s" color="subtitle">
            Publicações
          </Title>
          <Text size="s" color="span">
            {6} publicações
          </Text>
        </PublicationsHeader>

        <SearchInput />

        <div>
          <h1>posts</h1>
          <h1>posts</h1>
          <h1>posts</h1>
        </div>
      </Publications>
    </>
  );
}
