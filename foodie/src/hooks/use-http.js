import { useState, useEffect } from 'react';

const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const get = async (url) => {
    await fetchData(url, { method: 'GET' });
  };

  const post = async (url, body) => {
    await fetchData(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  };

  return { data, loading, error, get, post };
};



export default useHttp;