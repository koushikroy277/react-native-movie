import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import {useFetch} from '../../customHooks/useFetch';
import {themeBg} from '../../global';
import {requestGenre} from '../../Request';
import Banner from '../Banner';
import {ImgUrl} from '../CommonMovie';
import {AppContext} from '../../context/Context';
import CommonModal from '../CommonModal';

const Item = ({title, original_title, overview, release_date, poster_path}) => {
  const [loadImg, setLoadImg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const Props = {
    title: title,
    original: original_title,
    release_date: release_date,
    overview: overview,
    poster_path: poster_path,
    shortView: showModal,
    setShortView: setShowModal,
  };

  return (
    <>
      <MovieItemContainer>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setShowModal(true)}>
          <Image
            source={{uri: ImgUrl.concat(poster_path)}}
            style={styles.movieImg}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}>
          <CommonModal {...Props} />
        </Modal>
      </MovieItemContainer>
    </>
  );
};

const CommonGenre: React.FC<any> = props => {
  const {animatedValue} = useContext(AppContext);
  const {requestedData, loadData} = useFetch(props.genreUrl);
  const [showModal, setShowModal] = useState(false);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      original_title={item.original_title}
      overview={item.overview}
      release_date={item.release_date}
      poster_path={item.poster_path}
    />
  );

  return (
    <>
      <MovieParent>
        {loadData && (
          <>
            <Banner />
            <MovieWrapper>
              <FlatList
                data={requestedData}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </MovieWrapper>
          </>
        )}
      </MovieParent>
    </>
  );
};

const MovieParent = styled.View`
  background-color: ${themeBg};
  height: 100%;
`;

const MovieWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;
const MovieItemContainer = styled.View`
  margin: 10px;
`;

const styles = StyleSheet.create({
  movieImg: {
    width: 130,
    height: 200,
  },
});
export default CommonGenre;
