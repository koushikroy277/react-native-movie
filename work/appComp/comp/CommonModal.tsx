import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Button,
} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {fontColor, lightDark, mediumFont} from '../global';
import {ImgUrl} from './CommonMovie';

const CommonModal: React.FC<any> = props => {
  const navigation = useNavigation();
  const {
    title,
    overview,
    poster_path,
    release_date,
    id,
    setShortView,
    addMyList,
  } = props;

  const myListProps = {
    title,
    overview,
    poster_path,
    release_date,
    id,
  };

  return (
    <>
      <ModalContainer>
        <Pressable
          onPress={() => setShortView(false)}
          style={styles.modalCross}>
          <Entypo name="cross" size={40} color={fontColor} />
        </Pressable>
        <ModalWrapper>
          <Image
            source={{uri: ImgUrl.concat(poster_path)}}
            style={styles.modalImg}
          />
          <ModalDetail>
            {title ? (
              <ModalTitle>{title.substr(0, 25)} ....</ModalTitle>
            ) : (
              <Text style={styles.titleError}>Title isn't available</Text>
            )}
            {overview.length > 170 ? (
              <ModalOverview>{overview.substr(0, 150)}....</ModalOverview>
            ) : (
              <ModalOverview>{overview}</ModalOverview>
            )}
          </ModalDetail>
        </ModalWrapper>
        <MyListBtn>
          <Button
            title="Add to List"
            onPress={() => {
              setShortView(false);
              addMyList(myListProps);
            }}
            color="#535353"
          />
        </MyListBtn>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('CommonView', {
              title,
              release_date,
              overview,
              poster_path,
              id
            });
            setShortView(false);
          }}
          style={styles.gotoDetail}>
          <GoToDetail>
            <GoToText>Details & Info</GoToText>
            <Fontisto name="angle-right" size={20} color={fontColor} />
          </GoToDetail>
        </TouchableOpacity>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: ${Dimensions.get('window').height / 2.2}px;
  background-color: ${lightDark};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const GoToDetail = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: .5px;
  border-color: 'rgba(255, 255, 255, 0.478)';
  margin: 5px;
  padding: 15px;
`;

const GoToText = styled.Text`
  font-size: 24px;
  font-family: ${mediumFont};
  color: ${fontColor};
`;

const ModalWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const MyListBtn = styled.View`
  width: 200px;
  margin: 0 10px;
`;
const ModalDetail = styled.View`
  margin: 40px 10px 10px 10px;
  width: ${Dimensions.get('window').width / 1.65}px;
`;
const ModalTitle = styled.Text`
  font-size: 25px;
  font-family: ${mediumFont};
  color: ${fontColor};
  margin: 10px 0;
`;
const ModalOverview = styled.Text`
  font-size: 16px;
  font-family: ${mediumFont};
  color: ${fontColor};
`;

const styles = StyleSheet.create({
  modalCross: {
    position: 'absolute',
    top: 5,
    right: 5,
    alignItems: 'flex-end',
  },
  modalImg: {
    width: 110,
    height: 180,
    marginVertical: 25,
    marginHorizontal: 10,
  },
  titleError: {
    color: '#fc0000',
    fontSize: 22,
    marginVertical: 10,
  },
  gotoDetail: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default CommonModal;
