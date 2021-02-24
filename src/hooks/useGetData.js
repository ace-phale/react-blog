import { useState } from 'react';

import { API_ROOT_URL, API_TOKEN } from '../static/urls';

const useGetData = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const path = API_ROOT_URL + url;

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(path, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'app-id': API_TOKEN,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response.json();

    setData(data);
    setIsLoading(false);
    return data.data;
  };

  return {
    isLoading,
    error,
    isError,
    data,
    getData,
  };
};
export default useGetData;
