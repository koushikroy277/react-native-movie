import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import YouTube from 'react-native-youtube';
import movieTrailer from 'movie-trailer';

import {fontColor, mediumFont, themeBg, themeColor} from '../global';
import {ImgUrl} from './CommonMovie';
import {apiKey} from '../Request';
import {useTrailer} from '../customHooks/useTrailer';
import axios from 'axios';

const youtubeApiKey: string = 'AIzaSyBEWov8lgYF3GwB8BgZl6nkBQTYn_mATYo';

const CommonView: React.FC<any> = ({route}) => {
  const {title, overview, release_date, poster_path, id} = route.params;
  const [ytOpen, setYtOpen] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<number>(id);
  const [trailer, setTrailer] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  const url: string = `http://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${apiKey}`;

  const fetchVideo = async () => {
    try {
      const apiData = await axios.get(url);
      const resultData = apiData.data.results;
      resultData.map((d: any) => setTrailer(d.key));
      setLoad(true);

    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchVideo();
  }, [url]);

  // console.log(trailer);

  return (
    <>
      <ScrollView>
        <ViewContainer>
          <BannerView>
            <Image
              source={{uri: ImgUrl.concat(poster_path)}}
              style={styles.image}
            />
          </BannerView>
          <ViewWrapper>
            <LinearGradient
              colors={['transparent', '#000', themeBg]}
              style={styles.poster}>
              <ViewTitle>{title}</ViewTitle>
            </LinearGradient>
            <PlayBtn>
              <Button
                title="Play Now"
                onPress={() => {
                  setVideoId(id);
                  setYtOpen(true);
                }}
                color="#535353"
              />
            </PlayBtn>
            <ViewOverview>{overview}</ViewOverview>
            <ViewDate>Release: {release_date}</ViewDate>
          </ViewWrapper>
          {ytOpen && (
            <VideoContainer>
              <Pressable onPress={() => setYtOpen(false)}>
                <VideoIcon>
                  <Entypo name="cross" size={40} color={themeColor} />
                </VideoIcon>
              </Pressable>
              <YouTube
                videoId={trailer}
                apiKey={youtubeApiKey}
                style={styles.ytVideo}
              />
            </VideoContainer>
          )}
        </ViewContainer>
      </ScrollView>
    </>
  );
};

const ViewContainer = styled.View`
  background-color: ${themeBg};
  height: 100%;
  min-height: ${Dimensions.get('window').height}px;
`;
const ViewWrapper = styled.View``;
const ViewTitle = styled.Text`
  font-size: 24px;
  font-family: ${mediumFont};
  color: ${fontColor};
  text-align: center;
`;
const ViewOverview = styled.Text`
  font-size: 18px;
  opacity: 0.75;
  font-family: ${mediumFont};
  color: ${fontColor};
  margin: 0 10px;
  opacity: 0.7;
`;
const ViewDate = styled.Text`
  font-size: 15px;
  opacity: 0.6;
  font-family: ${mediumFont};
  color: ${fontColor};
  margin: 10px;
`;
const PlayBtn = styled.View`
  margin-bottom: 20px;
`;
const VideoContainer = styled.View`
  position: absolute;
  top: 100px;
`;
const VideoIcon = styled.View`
  background-color: ${themeBg};
  padding: 10px;
  width: 60px;
`;
const BannerView = styled.View``;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
  },
  poster: {
    marginTop: -120,
    marginBottom: 10,
    padding: 50,
  },
  ytVideo: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});

export default CommonView;
