import React from 'react';
import { requestGenre } from '../../Request';
import CommonGenre from './CommonGenre';

const Action: React.FC = () => {
  return (
    <>
      <CommonGenre genreUrl={requestGenre.fetchAction} />
    </>
  );
};

export default Action;
