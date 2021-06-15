import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {fontColor, transparentBg} from '../global';
import { useNavigation } from '@react-navigation/native';

const CommonViewHeader = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity activeOpacity={.6} onPress={() => navigation.goBack()} style={styles.parent}>
        <View style={styles.container}>
          <Fontisto name="angle-left" size={15} color={fontColor} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 55,
    position: 'relative',
    top: -20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000007f',
    borderRadius: 100,
    paddingVertical: 20,
  },
});

export default CommonViewHeader;
