import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InfoContainer, LinksContainer, PostInfoContainer } from './styles';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Text, Title } from '../../../../components/Typography';

export function PostInfo() {
  return (
    <PostInfoContainer>
      <LinksContainer>
        <ExternalLink icon={faChevronLeft} href="/" text="Voltar" variant />
        <ExternalLink href="/" text="GitHub" icon={faUpRightFromSquare} />
      </LinksContainer>

      <Title size="l">JavaScript data types and data structures</Title>

      <InfoContainer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <Text>cameronwll</Text>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <Text>Há 1 dia</Text>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <Text>5 comentários</Text>
        </div>
      </InfoContainer>
    </PostInfoContainer>
  );
}
