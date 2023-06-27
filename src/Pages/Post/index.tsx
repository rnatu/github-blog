import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostContent } from './components/PostContent';
import { PostInfo } from './components/PostInfo';
import { PostData } from '../../interfaces/PostData';
import { api } from '../../lib/axios';

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
      {post ? (
        <>
          <PostInfo
            html_url={post?.html_url}
            title={post.title}
            comments={post.comments}
            created_at={post.created_at}
          />
          <PostContent content={post.body} />
        </>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}
