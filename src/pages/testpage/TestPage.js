import useGetData from '../../hooks/useGetData';

import { useEffect, useState } from 'react';

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
  return (
    <div>
      <li>
        {/* <ul>isLoading: {isLoading}</ul>
        <ul>isError: {isError}</ul>
        <ul>error: {error}</ul>
        <ul>data: {}</ul> */}
      </li>
    </div>
  );
};

export default TestPage;
