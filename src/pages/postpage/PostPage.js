import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

//components
import LoadingCard from '../../components/loadingcard/LoadingCard';
import PostDetails from '../../components/postdetails/PostDetails';
import NotFound404 from '../../pages/notfound404/NotFound404';

const PostPage = () => {
  const [post, setPost] = useState(null);
  let { id } = useParams();
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData('post/' + id);

  useEffect(async () => {
    await getData();
  }, []);
  useEffect(() => {
    setPost(data);
  }, [data]);
  if (isError) {
    return <NotFound404 status={responseStatus} error={error} />;
  }
  if (isLoading || !data || !post) {
    return <LoadingCard />;
  }

  return <PostDetails post={post} />;
};

export default PostPage;
