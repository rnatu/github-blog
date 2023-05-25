import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Text, Title } from '../../../../components/Typography';
import { Avatar, ProfileContainer, DetailsContainer, Info } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/40378126?v=4" />

      <DetailsContainer>
        <header>
          <Title size="l">Cameron Williamson</Title>

          <ExternalLink href="/" text="GitHub" icon={faUpRightFromSquare} />
        </header>

        <Text>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>

        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <Text>cameronwll</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <Text>cameronwll</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <Text>cameronwll</Text>
          </div>
        </Info>
      </DetailsContainer>
    </ProfileContainer>
  );
}
