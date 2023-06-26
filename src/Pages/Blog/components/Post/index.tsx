import { Text, Title } from '../../../../components/Typography';
import ReactMarkdown from 'react-markdown';

import { PostContainer, PostDescription, PostHeader } from './styles';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  title: string;
  description: string;
  postNumber: number;
}

export function Post({ title, description, postNumber }: PostProps) {
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => navigate(`/post/${postNumber}`)}>
      <PostHeader>
        <Title>{title}</Title>

        <Text size="s" color="span">
          Há 1 dia
        </Text>
      </PostHeader>

      <PostDescription>
        {/* Renderiza o conteúdo markdown usando ReactMarkdown */}
        <ReactMarkdown>{description}</ReactMarkdown>
      </PostDescription>
    </PostContainer>
  );
}
