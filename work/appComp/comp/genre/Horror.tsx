import React from 'react';
import {requestGenre} from '../../Request';
import CommonGenre from './CommonGenre';

const Horror: React.FC = () => {
  return (
    <>
      <CommonGenre genreUrl={requestGenre.fetchHorror} />
    </>
  );
};

export default Horror;
