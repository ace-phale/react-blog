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
  const [totalPosts, setTotalPosts] = useState(null);
  const [nextPageIsLoading, setNextPageIsLoading] = useState();
  const [lastPage, setLastPage] = useState(false);
  let { tag } = useParams();
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData(`tag/${tag}/post`, currentPage);

  //after every change of TAG prop reloads the component and fetches new data
  useEffect(async () => {
    if (currentTag != tag) {
      setCurrentTag(tag);
      setCurrentPage(0);
      setPosts([]);
    }

    await getData();
  }, [tag, currentPage]);

  useEffect(() => {
    if (data) {
      setPosts((oldPosts) => [...oldPosts, ...data.data]);

      setTotalPosts(data.total);
      setNextPageIsLoading(false);
      isLastPage();
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', () => infiniteScroll(lastPage));
  }, []);

  const isLastPage = () => {
    if (posts.length === totalPosts) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  };

  //infinite scroll
  console.log(lastPage);
  const infiniteScroll = (isLastPage) => {
    console.log(isLastPage);
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!isLastPage) {
        setCurrentPage((lastPage) => lastPage + 1);
        setNextPageIsLoading(true);
      }
    }
  };

  const displayPosts = posts.map((post) => <PostCard key={post.id} post={post} />);

  if (isError) {
    return <NotFound404 status={responseStatus} error={error} />;
  }
  if (data) {
  }
  return (
    <>
      {<Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>}

      {nextPageIsLoading && <LoadingCard />}
    </>
  );
};

export default TagPage;
