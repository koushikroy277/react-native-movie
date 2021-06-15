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

const CommonList: React.FC<any> = ({ fetchMovieList, movieHeader }) => {
  const noDuplicateArray: any[] = fetchMovieList.filter(
    (v: any, i: any, a: any) => a.findIndex((t: any) => t.id === v.id) === i,
  );

  const renderItem = ({item}) => (
    <CommonListItem
      title={item.title ? item.title : item.name}
      overview={item.overview}
      release={item.release_date ? item.release_date : item.first_air_date}
      poster={item.poster_path}
      id={item.id}
    />
  );

  return (
    <>
      {fetchMovieList.length !== 0 ? (
        <ListBox>
          <ListTopHeader>{movieHeader}</ListTopHeader>
          <FlatList
            data={noDuplicateArray.slice(0).reverse()}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={item => item.id}
          />
        </ListBox>
      ) : (
          <ListBox>
            <ListHeader>{movieHeader}</ListHeader>
          <ListText>No items</ListText>
        </ListBox>
      )}
    </>
  );
};

const CommonListItem = ({title, overview, release, poster, id}) => {
  const [loadImg, setLoadImg] = useState(false);
  const [shortView, setShortView] = useState(false);
  const Props = {
    title: title,
    release_date: release,
    overview: overview,
    poster_path: poster,
    shortView: shortView,
    setShortView: setShortView,
  };

  return (
    <>
      <ListItem>
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
      </ListItem>
    </>
  );
};

const ListBox = styled.View`
  padding: 10px;
`;

const ListTopHeader = styled.Text`
  font-size: 25px;
  font-family: ${mediumFont};
  color: ${fontColor};
  margin: 10px 0;
`;

const ListItem = styled.View`
  margin: 0 10px;
`;

const ListHeader = styled.Text`
  font-size: 35px;
  color: ${fontColor};
  font-family: ${mediumFont};
`;
const ListText = styled.Text`
  font-size: 25px;
  color: ${fontColor};
  font-family: ${mediumFont};
  text-align: center;
  margin: 50px 0;
  opacity: .6;
`;



const styles = StyleSheet.create({
  poster: {
    width: 100,
    height: 150,
  },
});

export default CommonList;
