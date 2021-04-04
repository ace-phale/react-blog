import { useState } from 'react';

import { API_ROOT_URL, API_TOKEN } from '../static/urls';

const useGetData = (url, page = null) => {
  const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  let path;

  if (page != null) {
    path = API_ROOT_URL + url + `?page=${page}&limit=5`;
  } else {
    path = API_ROOT_URL + url;
  }
  console.log(path);
  const getData = async () => {
    setIsLoading(true);
    fetch(path, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'app-id': API_TOKEN,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (!response.ok) {
          setResponseStatus(response.status);

          if (response.status === 429) {
            throw new Error('Too many requests. Perhaps dialy API limit has been reached.');
          }
          if (response.status === 404) {
            throw new Error('Resource does not exist.');
          }
        }
        setResponseStatus(response.status);
        return (response = response.json());
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        setError(error);
      });
  };

  return {
    responseStatus,
    isLoading,
    error,
    isError,
    data,
    getData,
  };
};
export default useGetData;
