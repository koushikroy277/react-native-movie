import React from 'react';
import {requestGenre} from '../../Request';
import CommonGenre from './CommonGenre';

const Comedy: React.FC = () => {
  return (
    <>
      <CommonGenre genreUrl={requestGenre.fetchComedy} />
    </>
  );
};

export default Comedy;
