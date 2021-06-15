import React, { useContext } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import Banner from '../comp/Banner';
import CommonMovie from '../comp/CommonMovie';
import CommonWeb from '../comp/webSeries/CommonWeb';
import { AppContext } from '../context/Context';
import {themeBg, themeColor} from '../global';
import {requestGenre, requestWebSeries} from '../Request';

const urlList = [
  {url: requestWebSeries.fetchLatest, header: 'Latest'},
  {url: requestWebSeries.fetchSciFi, header: 'Sci-Fi & Fantasy'},
  {url: requestWebSeries.fetchWestern, header: 'Western Culture'},
  {url: requestWebSeries.fetchMystery, header: 'Murder & Mystery'},
  {url: requestWebSeries.fetchMostWatched, header: 'Most Watched'},
];

const WebSeries: React.FC = () => {
  const { animatedValue2, addMyListSeries } = useContext(AppContext);

  return (
    <>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue2}}}],
          {useNativeDriver: false},
        )}>
        <WebBanner>
          <Banner />
        </WebBanner>
        <WebBody>
          {urlList.map((req: any, i: any) => (
            <React.Fragment key={i}>
              <CommonMovie addMyList={addMyListSeries} fetchMovieList={req.url} movieHeader={req.header} />
            </React.Fragment>
          ))}
        </WebBody>
      </ScrollView>
    </>
  );
};

const WebBody = styled.View`
  background-color: ${themeBg};
  height: 100%;
`;

const WebBanner = styled.View``;

export default WebSeries;
