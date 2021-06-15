import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import {useFetch} from '../../customHooks/useFetch';
import {fontColor, mediumFont} from '../../global';
import {ImgUrl} from '../CommonMovie';

interface IProps {
  fetchUrl: string;
  header: string;
}

const CommonWeb: React.FC<IProps> = props => {
  const {requestedData, loadData} = useFetch(props.fetchUrl);

  return (
    <>
      <WebParent>
        {loadData ? (
          <ScrollView>
            <WebTitle>{props.header}</WebTitle>
            <WebWrapper>
              {requestedData.map((d: any, i: any) => (
                <React.Fragment key={i}>
                  <WebItems>
                    <Image
                      source={{uri: ImgUrl.concat(d.poster_path)}}
                      style={styles.webImg}
                    />
                  </WebItems>
                </React.Fragment>
              ))}
            </WebWrapper>
          </ScrollView>
        ) : (
          <Text>Not Working</Text>
        )}
      </WebParent>
    </>
  );
};

const WebParent = styled.View``;
const WebTitle = styled.Text`
  font-size: 20px;
  font-family: ${mediumFont};
  color: ${fontColor};
`;

const WebWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const WebItems = styled.View``;

const styles = StyleSheet.create({
  webImg: {
    width: 100,
    height: 150,
    margin: 10,
  },
});

export default CommonWeb;
