import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Dimensions,
  Modal,
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import {
  fontColor,
  mediumFont,
  regularFont,
  themeBg,
  themeColor,
  transparentBg,
} from './global';
import {AppContext} from './context/Context';

const CustomHeader2: React.FC<any> = props => {
  const navigation = useNavigation();

  return (
    <>
      <HeaderContainer>
        <Animated.View
          style={{
            backgroundColor: props.bgAnimation,
            width: Dimensions.get('window').width,
          }}>
          <HeaderWrapper>
            <MainText>{props.headerName}</MainText>
            <HeaderTabs>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('Web Series')}>
                <TabItemText>All {props.subTitle}</TabItemText>
              </TouchableOpacity>
            </HeaderTabs>
            
          </HeaderWrapper>
        </Animated.View>
      </HeaderContainer>
    </>
  );
};
const HeaderContainer = styled.View`
  position: relative;
  left: -16px;
  top: -5px;
`;
const HeaderWrapper = styled.View`
  padding: 10px 20px;
`;
const HeaderTabs = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;
const TabItemText = styled.Text`
  font-size: 24px;
  font-family: ${mediumFont};
  color: ${fontColor};
  border-bottom-width: 4px;
  border-color: ${themeColor};
  padding-bottom: 8px;
`;
const TabItemNestedText = styled.Text`
  font-size: 24px;
  font-family: ${mediumFont};
  color: ${fontColor};
`;
const TabItemWrapper = styled.View`
  margin: 0 25px;
`;
const TabItemMenu = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: ${transparentBg};
  padding: 10px 20px;
`;
const TabMenuElement = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const TabItemMenuText = styled.Text`
  font-size: 24px;
  font-family: ${regularFont};
  color: ${fontColor};
  margin: 20px 0;
`;
const MainText = styled.Text`
  font-size: 30px;
  font-family: ${regularFont};
  color: ${fontColor};
`;

const styles = StyleSheet.create({
  optionMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  crossBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  fadingContainer: {},
});

export default CustomHeader2;
