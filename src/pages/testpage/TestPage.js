import useGetData from '../../hooks/useGetData';

import { useEffect, useState } from 'react';
import LoadingCard from '../../components/loadingcard/LoadingCard';
const TestPage = () => {
  const [posts, setPosts] = useState([]);

  let tag = 'dog';
  const { isLoading, isError, error, data, responseStatus, getData } = useGetData('tag/' + tag + '/post');

  useEffect(async () => {
    setPosts(await getData());
  }, []);

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
  log();
  return <LoadingCard />;
};

export default TestPage;
