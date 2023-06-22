import { Text, Title } from '../../../../components/Typography';
import ReactMarkdown from 'react-markdown';

import { PostContainer, PostDescription, PostHeader } from './styles';

interface PostProps {
  title: string;
  description: string;
}

export function Post({ title, description }: PostProps) {
  return (
    <PostContainer onClick={(e) => console.log('oi')}>
      <PostHeader>
        <Title>{title}</Title>

        <Text size="s" color="span">
          Há 1 dia
        </Text>
      </PostHeader>

      <PostDescription>
        <ReactMarkdown>{description}</ReactMarkdown>
      </PostDescription>
    </PostContainer>
  );
}
