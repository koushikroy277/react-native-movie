import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';
import styled from 'styled-components/native';

import {requestMovie} from '../Request';
import {ImgUrl} from './CommonMovie';
import {fontColor, themeBg, transparentBg} from '../global';

const Banner: React.FC = () => {
  const [banner, setBanner] = useState<any>([]);
  const [bannerLoad, setBannerLoad] = useState<boolean>(false);

  const fetchBanner = async () => {
    try {
      const bannerApi = await axios.get(requestMovie.fetchBanner);
      setBanner(
        bannerApi.data.results[
          Math.floor(Math.random() * bannerApi.data.results.length)
        ],
      );
      setBannerLoad(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, [requestMovie.fetchBanner]);

  return (
    <>
      {bannerLoad ? (
        <BannerParent>
          <ImageBackground
            source={{uri: ImgUrl.concat(banner.backdrop_path)}}
            style={styles.bannerImg}>
            <BannerGradient>
              <LinearGradient colors={['transparent', themeBg]}>
                <BannerWrapper>
                  <BannerText>
                    {banner.title ? banner.title : banner.original_title}
                  </BannerText>
                </BannerWrapper>
              </LinearGradient>
            </BannerGradient>
          </ImageBackground>
        </BannerParent>
      ) : (
        <Text>Loading....</Text>
      )}
    </>
  );
};

const BannerParent = styled.View`
  position: relative;
  top: 0;
`;
const BannerGradient = styled.View`
  background-color: transparent;
`;
const BannerWrapper = styled.View`
  display: flex;
  justify-content: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
const BannerText = styled.Text`
  color: ${fontColor};
  text-align: center;
  font-size: 30px;
  padding-bottom: 40px;
`;
const styles = StyleSheet.create({
  bannerImg: {
    width: '100%',
    height: 480,
  },
  gradient: {
    alignItems: 'flex-end',
  },
});

export default Banner;
