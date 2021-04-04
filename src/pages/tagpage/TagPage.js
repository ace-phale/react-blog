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
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPageIsLoading, setNextPageIsLoading] = useState(true);
  let { tag } = useParams();
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData(`tag/${tag}/post`, currentPage);

  //after every change of TAG prop reloads the component and fetches new data
  useEffect(async () => {
    if (currentTag != tag) {
      setCurrentTag(tag);
      setCurrentPage(0);
      setPosts([]);
    }
    console.log('tag / current page effectr');
    await getData();
  }, [tag, currentPage]);

  useEffect(() => {
    if (data) {
      setPosts((oldPosts) => [...oldPosts, ...data.data]);
      setNextPageIsLoading(false);
    }
    console.log('data effect');
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
  }, []);

  //infinite scroll
  const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setCurrentPage((lastPage) => lastPage + 1);

      setNextPageIsLoading(true);
    }
  };

  const displayPosts = posts.map((post) => <PostCard key={post.id} post={post} />);

  if (isError) {
    return <NotFound404 status={responseStatus} error={error} />;
  }

  return (
    <>
      {<Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>}

      {nextPageIsLoading && <LoadingCard />}
    </>
  );
};

export default TagPage;
