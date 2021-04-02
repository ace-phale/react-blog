//hooks
import useGetData from '../../hooks/useGetData';

//components
import LoadingCard from '../../components/loadingcard/LoadingCard';
import UserDetails from '../../components/userdetails/UserDetails';
import PostCard from '../../components/postcard/PostCard';
import NotFound404 from '../notfound404/NotFound404';

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
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData('user/' + id);

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

  if (isError) {
    return <NotFound404 status={responseStatus} error={error} />;
  }
  if (isLoading || !data || !userData) {
    return <LoadingCard />;
  }
  if (postIsLoading || !postData || !usersPosts) {
    return <LoadingCard />;
  }
  const displayPosts = usersPosts.data.map((post) => <PostCard key={post.id} post={post} />);

  return (
    <>
      <UserDetails user={userData} />
      <hr
        style={{
          height: '1px',
          border: ' 0',
          color: 'red',
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(186, 186, 187, 0.75), rgba(0, 0, 0, 0.05))',
        }}
      />
      <h3 className='text-center p-4'>Posts by {userData.firstName}:</h3>
      <Row className='mx-lg-3  m-1 mt-3 mt-md-0'>{displayPosts}</Row>
    </>
  );
};

export default UserPage;
