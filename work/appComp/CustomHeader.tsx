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

const genreList: string[] = ['Romance', 'Action', 'Comedy', 'Horror', 'Documentaries'];

const CustomHeader: React.FC<any> = (props) => {
  const navigation = useNavigation();
  const {state, makeChangeHeader, _bgAnimation} = React.useContext(AppContext);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [genre, setGenre] = React.useState('Genre');

  return (
    <>
      <HeaderContainer>
        <Animated.View
          style={{
            backgroundColor: _bgAnimation,
            width: Dimensions.get('window').width,
          }}>
          <HeaderWrapper>
            <MainText>{props.headerName}</MainText>
            <HeaderTabs>
              <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('Movies')}>
                <TabItemText>All Movies</TabItemText>
              </TouchableOpacity>
              <TabItemWrapper>
                <TouchableOpacity
                  activeOpacity={.6}
                  style={styles.optionMenu}
                  onPress={() => setMenuVisible(true)}>
                  <TabItemNestedText>{genre}</TabItemNestedText>
                  <Entypo name="triangle-down" size={30} color={fontColor} />
                </TouchableOpacity>
              </TabItemWrapper>
            </HeaderTabs>
            <Modal
              animationType="fade"
              transparent={true}
              visible={menuVisible}
              onRequestClose={() => setMenuVisible(menu => !menu)}>
              <TabItemMenu>
                <Pressable
                  style={styles.crossBtn}
                  onPress={() => setMenuVisible(false)}>
                  <Entypo name="cross" size={40} color={fontColor} />
                </Pressable>
                <TabMenuElement>
                  {genreList.map((d: string, i: any) => (
                    <React.Fragment key={i}>
                      <Pressable
                        onPress={() => {
                          navigation.navigate(d);
                          setMenuVisible(false);
                        }}>
                        <TabItemMenuText>{d}</TabItemMenuText>
                      </Pressable>
                    </React.Fragment>
                  ))}
                </TabMenuElement>
              </TabItemMenu>
            </Modal>
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

export default CustomHeader;
