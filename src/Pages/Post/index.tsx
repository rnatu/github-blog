import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostContent } from './components/PostContent';
import { PostInfo } from './components/PostInfo';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { NotFound } from '../../components/NotFound';
import { PostData } from '../../interfaces/PostData';
import { api } from '../../lib/axios';

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPost() {
      setLoading(true);

      try {
        const { data } = await api.get(
          `/repos/rnatu/github-blog/issues/${postNumber}`,
        );

        setPost(data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }

    getPost();
  }, [postNumber]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : post ? (
        <>
          <PostInfo
            html_url={post.html_url}
            title={post.title}
            created_at={post.created_at}
            comments={post.comments}
          />
          <PostContent content={post.body} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
