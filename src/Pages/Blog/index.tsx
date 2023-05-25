import { Header } from '../../components/Header';
import { Text, Title } from '../../components/Typography';
import { Profile } from './components/Profile';
import { PublicationsHeader } from './styles';

export function Blog() {
  return (
    <>
      <Header />
      <Profile />

      <PublicationsHeader>
        <Title size="s" color="subtitle">
          Publicações
        </Title>
        <Text size="s" color="span">
          {6} publicações
        </Text>
      </PublicationsHeader>
    </>
  );
}
