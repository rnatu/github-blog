import { ExternalLink } from '../../../../components/ExternalLink';
import { Title } from '../../../../components/Typography';
import { Avatar, ProfileContainer, UserInfoContainer } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/40378126?v=4" />

      <UserInfoContainer>
        <header>
          <Title size="l">Cameron Williamson</Title>

          <ExternalLink text="GitHub" />
        </header>
      </UserInfoContainer>
    </ProfileContainer>
  );
}
