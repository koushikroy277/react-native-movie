import React, {useContext} from 'react';
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
import {AppContext} from '../context/Context';
import {themeBg, themeColor} from '../global';
import {requestTv} from '../Request';

const urlList = [
  {url: requestTv.fetchGetOnTheAir, header: 'On the air'},
  {url: requestTv.fetchPopular, header: 'Popular'},
  {url: requestTv.fetchTopRated, header: 'Top picks for you'},
];

const TvShows: React.FC = () => {
  const {animatedValue3, addMyListShows} = useContext(AppContext);

  return (
    <>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue3}}}],
          {useNativeDriver: false},
        )}>
        <TvBanner>
          <Banner />
        </TvBanner>
        <TvBody>
          {urlList.map((req: any, i: any) => (
            <React.Fragment key={i}>
              <CommonMovie addMyList={addMyListShows} fetchMovieList={req.url} movieHeader={req.header} />
            </React.Fragment>
          ))}
        </TvBody>
      </ScrollView>
    </>
  );
};

const TvBody = styled.View`
  background-color: ${themeBg};
  height: 100%;
`;

const TvBanner = styled.View``;

export default TvShows;
