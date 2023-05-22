/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Title from '../components/Title';
import TextWrapper from '../components/TextWrapper';

const TodoScreen = ({navigation}: TODO) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title
          navigation={navigation}
          style={styles.title}
          color={'black'}
          icon1={'arrow-back'}
          icon2="calendar"
          name="August"
        />
        <TextWrapper text={'Today'}>
          <Text style={[styles.text, styles.title]}>{'Thursday 24 Aug'}</Text>
        </TextWrapper>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 25,
    color: '#140101',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {flex: 1, marginHorizontal: 20, marginVertical: 20},
  text: {
    color: 'black',
  },
});

export interface TODO {
  navigation: any;
}
