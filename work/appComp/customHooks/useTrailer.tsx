import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = 'a10bba2275d48493fb1ccea0de820ebc';

export const useTrailer = (videoId: number) => {
  const [trailer, setTrailer] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  if (videoId === 0) return;

  const fetchVideo = async () => {
    try {
      const apiData = await axios.get(
        `http://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${apiKey}`,
      );
      setTrailer(apiData.data.results.map((d: any) => d.key));
      setLoad(true);

    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [videoId]);
  
  return { trailer, error, load };
};
