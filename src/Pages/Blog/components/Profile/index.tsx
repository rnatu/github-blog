import { LinkText, Title } from '../../../../components/Typography';
import {
  Avatar,
  ProfileContainer,
  UserInfoContainer,
  UserInfoHeader,
} from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/40378126?v=4" />

      <UserInfoContainer>
        <UserInfoHeader>
          <Title size="l">Cameron Williamson</Title>

          <div>
            <LinkText>GITHUB</LinkText>
          </div>
        </UserInfoHeader>
      </UserInfoContainer>
    </ProfileContainer>
  );
}
