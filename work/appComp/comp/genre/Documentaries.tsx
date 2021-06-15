import React from 'react';
import {requestGenre} from '../../Request';
import CommonGenre from './CommonGenre';

const Documentaries: React.FC = () => {
  return (
    <>
      <CommonGenre genreUrl={requestGenre.fetchDocumentaries} />
    </>
  );
};

export default Documentaries;
