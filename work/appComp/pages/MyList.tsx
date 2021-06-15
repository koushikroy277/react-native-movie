import React, { useContext } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import CommonList from '../comp/CommonList';
import { AppContext } from '../context/Context';
import {themeBg} from '../global';

const MyList: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <ListBody>
        <CommonList fetchMovieList={state.myListMovies} movieHeader="Movies" />
        <CommonList fetchMovieList={state.myListSeries} movieHeader="Series" />
        <CommonList fetchMovieList={state.myListShows} movieHeader="Shows" />
      </ListBody>
    </>
  );
};

const ListBody = styled.View`
  background-color: ${themeBg};
  height: 100%;
`;

const ListText = styled.Text`
  color: #fff;
  font-size: 35px;
  margin: 10px;
`;

export default MyList;
