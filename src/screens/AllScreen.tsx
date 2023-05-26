/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DATAITEMS} from '../data/data';

const AllScreen = ({navigation, route}: any) => {
  const {data, name}: {data: DATAITEMS; name: string} = route.params;
  useLayoutEffect(() => {
    console.log(data);
    console.log('====================================');
    return navigation.setOptions({title: name});
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AllScreen</Text>
    </View>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});
