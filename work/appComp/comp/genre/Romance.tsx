import React from 'react';
import {requestGenre} from '../../Request';
import CommonGenre from './CommonGenre';

const Romance: React.FC = () => {
  return (
    <>
      <CommonGenre genreUrl={requestGenre.fetchRomance} />
    </>
  );
};

export default Romance;
