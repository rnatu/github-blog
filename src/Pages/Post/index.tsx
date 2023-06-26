import { useParams } from 'react-router-dom';
import { PostContent } from './components/PostContent';
import { PostInfo } from './components/PostInfo';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { PostData } from '../../interfaces/PostData';

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    async function getPost() {
      const { data } = await api.get(
        `/repos/rnatu/github-blog/issues/${postNumber}`,
      );

      setPost(data);
    }

    getPost();
  }, [postNumber]);

  return (
    <>
      <PostInfo />
      <PostContent />
    </>
  );
}
