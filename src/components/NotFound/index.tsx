import { NotFoundContainer } from './styles';
import notFound from '../../assets/not-found.png';
import { Title } from '../Typography';

export function NotFound() {
  return (
    <NotFoundContainer>
      <Title size="l">Ops... Algo deu errado</Title>
      <Title>Tente novamente mais tarde</Title>
      <img src={notFound} alt="" />
    </NotFoundContainer>
  );
}
