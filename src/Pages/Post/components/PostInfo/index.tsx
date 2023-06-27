/* eslint-disable camelcase */
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
import { PostData } from '../../../../interfaces/PostData';
import { dateFormatter } from '../../../../utils/dateFormatter';

interface PostInfoProps {
  postData: PostData;
}

export function PostInfo({ postData }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <LinksContainer>
        <ExternalLink icon={faChevronLeft} href="/" text="Voltar" variant />
        <ExternalLink
          href={postData.html_url}
          text="GitHub"
          icon={faUpRightFromSquare}
        />
      </LinksContainer>

      <Title size="l">{postData.title}</Title>

      <InfoContainer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <Text>{import.meta.env.VITE_GITHUB_USERNAME}</Text>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <Text>{dateFormatter(postData.created_at)}</Text>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <Text>
            {postData.comments}
            {postData.comments === 1 ? 'comentário' : 'comentários'}
          </Text>
        </div>
      </InfoContainer>
    </PostInfoContainer>
  );
}
