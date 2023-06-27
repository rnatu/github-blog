import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostContent } from './components/PostContent';
import { PostInfo } from './components/PostInfo';
import { NotFound } from './styles';
import notFound from '../../assets/not-found.png';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Title } from '../../components/Typography';
import { PostData } from '../../interfaces/PostData';
import { api } from '../../lib/axios';

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPost() {
      setLoading(true);
      setTimeout(async () => {
        try {
          const { data } = await api.get(
            `/repos/rnatu/github-blog/issues/${postNumber}`,
          );

          setPost(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    }

    getPost();
  }, [postNumber]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : post ? (
        <>
          <PostInfo postData={post} />
          <PostContent content={post.body} />
        </>
      ) : (
        <NotFound>
          <Title size="l">Ops... Algo deu errado</Title>
          <Title>Tente novamente mais tarde</Title>
          <img src={notFound} alt="" />
        </NotFound>
      )}
    </>
  );
}
