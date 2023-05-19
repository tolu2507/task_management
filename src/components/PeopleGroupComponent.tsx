/* eslint-disable prettier/prettier */
import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {People} from '../data/data';

const PeopleGroupComponent = ({peopleItem}: {peopleItem: People}) => {
  return (
    <View
      style={[
        styles.abs,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginLeft:
            peopleItem.margin === 0
              ? 0
              : peopleItem.margin && peopleItem.margin * 10,
          backgroundColor: '#636360',
        },
      ]}>
      <Image source={peopleItem.image} style={styles.image} />
    </View>
  );
};

export default PeopleGroupComponent;

const styles = StyleSheet.create({
  abs: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'green',
    position: 'absolute',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
});
