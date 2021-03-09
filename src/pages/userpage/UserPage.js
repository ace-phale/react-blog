//hooks
import useGetData from '../../hooks/useGetData';

//components
import LoadingCard from '../../components/loadingcard/LoadingCard';
import UserDetails from '../../components/userdetails/UserDetails';
//react
import { useEffect, useState } from 'react';

//react-router
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const { isLoading, isError, error, data, getData } = useGetData('user/' + id);

  useEffect(async () => {
    await getData();
  }, []);
  useEffect(() => {
    setUserData(data);
  }, [data]);

  if (isLoading || !data || !userData) {
    return <LoadingCard />;
  }
  console.log(userData);
  return <UserDetails user={userData} />;
};

export default UserPage;
