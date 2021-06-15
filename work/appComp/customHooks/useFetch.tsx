import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {
  const [requestedData, setRequestedData] = useState<any>([]);
  const [loadData, setLoadData] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(url);
        setRequestedData(apiData.data.results.slice(0).reverse());
        setLoadData(true);
        
      } catch (err) {
        setApiError(err);
      };
    };

    fetchData();
  }, [url]);

  return { requestedData, loadData, apiError };
}