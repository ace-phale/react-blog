import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

//components
import PostCard from '../../components/postcard/PostCard';
import LoadingCard from '../../components/loadingcard/LoadingCard';
import NotFound404 from '../../pages/notfound404/NotFound404';

//react-bootstrap
import Row from 'react-bootstrap/Row';

const TagPage = () => {
  let { tag } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(0); //used to start useEffect that updates the page, might have wrong value

  const currentPage = useRef(0); //used to store current page value
  const nextPageIsLoading = useRef(false);
  const isLastPageReached = useRef(false);

  const currentTag = useRef(tag);

  const { isLoading, isError, error, data, responseStatus, getData } = useGetData(`tag/${tag}/post`, currentPage.current);

  //executed once
  useEffect(() => {}, []);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  //executed when param 'tag' changes
  useEffect(() => {
    if (currentTag.current != tag) {
      console.log('tag change');

      onTagChange();
    }
  }, [tag]);
  //executed after new data is fetched

  useEffect(() => {
    if (data) {
      setPosts((oldPosts) => [...oldPosts, ...data.data]);
      if (posts.length + data.data.length === data.total) {
        isLastPageReached.current = true;
      }
      nextPageIsLoading.current = false;
    }
  }, [data]);

  //executed when state 'currentPage' changes
  useEffect(() => {
    onPageChange();
  }, [currentPage.current]);

  const setPostList = () => {
    nextPageIsLoading.current = true;
    getData();
  };

  const onPageChange = () => {
    setPostList();
  };
  const onTagChange = () => {
    if (currentPage.current === 0) {
      setPostList();
    }
    currentPage.current = 0;
    currentTag.current = tag;
    isLastPageReached.current = false;
    setPosts([]);

    setCurrentPageState(0);
  };

  const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!nextPageIsLoading.current && !isLastPageReached.current) {
        currentPage.current = currentPage.current + 1;
        setCurrentPageState(currentPage.current);
      } else {
        console.log('not adding next page');
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

      {nextPageIsLoading.current && <LoadingCard />}
    </>
  );
};

export default TagPage;
