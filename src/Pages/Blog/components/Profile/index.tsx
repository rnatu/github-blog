import {
  faGamepad,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Text, Title } from '../../../../components/Typography';
import { Avatar, ProfileContainer, DetailsContainer, Info } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <FontAwesomeIcon icon={faGamepad} />
            <Text>cameronwll</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faGamepad} />
            <Text>cameronwll</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faGamepad} />
            <Text>cameronwll</Text>
          </div>
        </Info>
      </DetailsContainer>
    </ProfileContainer>
  );
}
