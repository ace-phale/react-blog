import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

//components
import PostCard from '../../components/postcard/PostCard';
import LoadingCard from '../../components/loadingcard/LoadingCard';
import NotFound404 from '../../pages/notfound404/NotFound404';

//react-bootstrap
import Row from 'react-bootstrap/Row';

const TagPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  let { tag } = useParams();
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData('tag/' + tag + '/post');

  const log = () => {
    console.log('_____________________');
    console.log(`isLoading: ${isLoading}`);
    console.log(`isError: ${isError}`);
    console.log(`error: ${error}`);
    console.log(`data: ${data}`);
    console.log(`response status: ${responseStatus}`);
    if (data) {
      console.log('Data:');
      console.log(data.data);
    }
    if (error) {
      console.log('Error:');
      console.log(error);
    }
  };

  //after every change of TAG prop reloads the component and fetches new data
  useEffect(async () => {
    setCurrentTag(tag);
    await getData();
  }, [tag]);
  useEffect(() => {
    if (data) {
      setPosts([...data.data]);
    }
  }, [data]);
  // log();
  //displays loading if fetching not yet completed
  if (isError) {
    return <NotFound404 status={responseStatus} error={error} />;
  }
  if (isLoading || !data || posts.length === 0) {
    return <LoadingCard />;
  }

  const displayPosts = posts.map((post) => <PostCard key={post.id} post={post} />);
  return <>{data && !isLoading && <Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>}</>;
};

export default TagPage;
