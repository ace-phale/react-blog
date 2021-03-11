//hooks
import useGetData from '../../hooks/useGetData';

//components
import LoadingCard from '../../components/loadingcard/LoadingCard';
import UserDetails from '../../components/userdetails/UserDetails';
import PostCard from '../../components/postcard/PostCard';
//react
import { useEffect, useState } from 'react';
//react-bootstrap
import Row from 'react-bootstrap/Row';

//react-router
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [usersPosts, setUsersPosts] = useState();
  const { isLoading, isError, error, data, getData } = useGetData('user/' + id);

  const { isLoading: postIsLoading, isError: postIsError, error: postError, data: postData, getData: getPostData } = useGetData(
    'user/' + id + '/post'
  );
  //get user data
  useEffect(async () => {
    await getData();
  }, []);
  useEffect(() => {
    setUserData(data);
  }, [data]);

  //get post data
  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    setUsersPosts(postData);
  }, [postData]);

  console.log(postData);
  if (isLoading || !data || !userData) {
    return <LoadingCard />;
  }
  const displayPosts = usersPosts.data.map((post) => <PostCard key={post.id} post={post} />);
  return (
    <>
      <UserDetails user={userData} />
      <Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>
    </>
  );
};

export default UserPage;
