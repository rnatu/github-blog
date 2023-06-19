import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from '../../../../components/ExternalLink';
import { Text, Title } from '../../../../components/Typography';
import {
  Avatar,
  ProfileContainer,
  DetailsContainer,
  InfoContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';

interface ProfileProps {
  githubUserName: string;
}

interface UserData {
  avatarURL: string;
  name: string;
  userName: string;
  mainURL: string;
  bio: string;
  followers: number;
  company: string;
}

export function Profile({ githubUserName }: ProfileProps) {
  const [userData, setUserData] = useState({} as UserData);

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get(`/users/${githubUserName}`);

      const githubUserData = {
        avatarURL: data.avatar_url,
        name: data.name,
        userName: data.login,
        mainURL: data.html_url,
        bio: data.bio,
        followers: data.followers,
        company: data.company,
      };

      setUserData({ ...githubUserData });
    }

    getUserData();
  }, [githubUserName]);

  return (
    <ProfileContainer>
      <Avatar src={userData.avatarURL} />

      <DetailsContainer>
        <header>
          <Title size="l">{userData.name}</Title>

          <ExternalLink
            href={userData.mainURL}
            text="GitHub"
            icon={faUpRightFromSquare}
          />
        </header>

        <Text>{userData.bio}</Text>

        <InfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <Text>{userData.userName}</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <Text>{userData.company || 'N/A'}</Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <Text>{userData.followers || 0}</Text>
          </div>
        </InfoContainer>
      </DetailsContainer>
    </ProfileContainer>
  );
}
