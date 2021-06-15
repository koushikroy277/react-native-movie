import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import {themeBg} from '../global';
import CommonMovie from '../comp/CommonMovie';
import {requestMovie} from '../Request';
import Banner from '../comp/Banner';
import {AppContext} from '../context/Context';

const requestList = [
  {url: requestMovie.fetchNowPlaying, movieHeader: 'Latest'},
  {url: requestMovie.fetchPopular, movieHeader: 'Popular'},
  {url: requestMovie.fetchTopRated, movieHeader: 'Top Rated'},
  {url: requestMovie.fetchTrending, movieHeader: 'Trending'},
  {url: requestMovie.fetchUpcoming, movieHeader: 'Upcoming'},
  {url: requestMovie.fetchSimilar, movieHeader: 'Top picks for you'},
  {url: requestMovie.fetchSimilar2, movieHeader: 'Most Watched'},
  {url: requestMovie.fetchSimilar3, movieHeader: 'Exciting'},
  {url: requestMovie.fetchSimilar4, movieHeader: 'Top Thrillers'},
  {url: requestMovie.fetchSimilar5, movieHeader: 'Blockbusters'},
  {url: requestMovie.fetchSimilar6, movieHeader: 'Gems for you'},
  {url: requestMovie.fetchSimilar7, movieHeader: 'You may like'},
  {url: requestMovie.fetchSimilar8, movieHeader: 'Venture Specials'},
  {url: requestMovie.fetchSimilar9, movieHeader: 'Not so traditional'},
  {url: requestMovie.fetchSimilar10, movieHeader: 'More movies'},
];
const Movies: React.FC = () => {
  const {state, addMyListMovies, animatedValue} =
    React.useContext(AppContext);

  return (
    <>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue}}}],
          {useNativeDriver: false},
        )}>
        <MovieBody>
          <MovieBanner>
            <Banner />
          </MovieBanner>
          <MovieRows>
            {requestList.map((req: any, i: any) => (
              <React.Fragment key={i}>
                <CommonMovie
                  addMyList={addMyListMovies}
                  fetchMovieList={req.url}
                  movieHeader={req.movieHeader}
                />
              </React.Fragment>
            ))}
          </MovieRows>
        </MovieBody>
      </ScrollView>
    </>
  );
};

const MovieBody = styled.View`
  background-color: ${themeBg};
  min-height: ${Dimensions.get('window').height}px;
`;

const MovieBanner = styled.View``;
const MovieRows = styled.View``;

export default Movies;
