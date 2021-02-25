import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

const PostPage = () => {
  const [post, setPost] = useState(null);
  let { id } = useParams();
  const { isLoading, isError, error, data, getData } = useGetData('post/' + id);

  useEffect(async () => {
    setPost(await getData());
  }, []);

  if (isLoading || !data || !post) {
    return <div>loading</div>;
  }

  return <div>PostPage</div>;
};

export default PostPage;
