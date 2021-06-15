import React, {useEffect, useContext, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import styled from 'styled-components/native';

import {AppContext} from '../context/Context';
import {fontColor, mediumFont, regularFont} from '../global';
import {useFetch} from '../customHooks/useFetch';
import CommonModal from './CommonModal';

export const ImgUrl = 'https://image.tmdb.org/t/p/original/';

const CommonMovie: React.FC<any> = ({addMyList, fetchMovieList, movieHeader}) => {
  const {state} = useContext(AppContext);
  const {requestedData, loadData} = useFetch(fetchMovieList);

  const renderItem = ({item}) => (
    <Item
      title={item.title ? item.title : item.name}
      original_title={item.original_title}
      overview={item.overview}
      release={item.release_date ? item.release_date : item.first_air_date}
      poster={item.poster_path}
      id={item.id}
      addMyList={addMyList}
    />
  );

  return (
    <>
      {loadData ? (
        <MovieBox>
          <MovieTopHeader>{movieHeader}</MovieTopHeader>
          <FlatList
            data={requestedData}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item.id}
          />
        </MovieBox>
      ) : (
        <Text>Loading....</Text>
      )}
    </>
  );
};

const Item = ({title, original_title, overview, release, poster, id, addMyList}) => {
  const [loadImg, setLoadImg] = useState(false);
  const [shortView, setShortView] = useState(false);

  const Props = {
    title: title,
    original: original_title,
    release_date: release,
    overview: overview,
    poster_path: poster,
    id: id,
    shortView: shortView,
    setShortView: setShortView,
    addMyList: addMyList,
  };

  return (
    <>
      <MovieItem>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShortView(true)}>
          <Image source={{uri: ImgUrl.concat(poster)}} style={styles.poster} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={shortView}
          onRequestClose={() => setShortView(view => !view)}>
          <CommonModal {...Props} />
        </Modal>
      </MovieItem>
    </>
  );
};

const MovieBox = styled.View`
  padding: 10px;
`;

const MovieTopHeader = styled.Text`
  font-size: 25px;
  font-family: ${mediumFont};
  color: ${fontColor};
  margin: 10px 0;
`;

const MovieItem = styled.View`
  margin: 0 10px;
`;

const styles = StyleSheet.create({
  poster: {
    width: 100,
    height: 150,
  },
});

export default CommonMovie;
