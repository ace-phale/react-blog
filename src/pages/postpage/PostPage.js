import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  const { isLoading, isError, error, data, getData } = useGetData('post');

  useEffect(async () => {
    setPosts(await getData().length);
  }, []);
  console.log(posts);

  const diplayPosts = posts.map;
  return <div>PostPage</div>;
};

export default PostPage;
