import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

//components
import PostCard from '../../components/postcard/PostCard';
import LoadingCard from '../../components/loadingcard/LoadingCard';

//react-bootstrap
import Row from 'react-bootstrap/Row';

const TagPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  let { tag } = useParams();
  const { isLoading, isError, error, data, getData } = useGetData('tag/' + tag + '/post');

  //after every change of TAG prop reloads the component and fetches new data
  useEffect(async () => {
    setCurrentTag(tag);
    setPosts(await getData());
  }, [tag]);

  //displays loading if fetching not yet completed

  if (isLoading || !data || posts.length === 0) {
    return <LoadingCard />;
  }

  const displayPosts = posts.map((post) => <PostCard key={post.id} post={post} />);
  return <>{data && !isLoading && <Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>}</>;
};

export default TagPage;
