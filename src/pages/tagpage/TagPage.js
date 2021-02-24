import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

//components
import PostCard from '../../components/postcard/PostCard';
//react-bootstrap
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const TagPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  let { tag } = useParams();
  const { isLoading, isError, error, data, getData } = useGetData(
    'tag/' + tag + '/post'
  );

  //after every change of TAG prop reloads the component and fetches new data
  useEffect(async () => {
    setCurrentTag(tag);
    setPosts(await getData());
  }, [tag]);

  console.log(posts);

  //displays loading if fetching not yet completed
  if (isLoading || !data || posts.length === 0) {
    return <div>loading</div>;
  }
  console.log(posts);

  const displayPosts = posts.map((post) => <PostCard post={post} />);
  return (
    <>
      {data && !isLoading && (
        <Row className='m-lg-3 m-md-2 m-1 mt-3 mt-md-0'>{displayPosts}</Row>
      )}
    </>
  );
};

export default TagPage;
