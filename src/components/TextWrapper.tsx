/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DescriptionComponent} from './Description';
import {DATAITEMS} from '../data/data';

const TextWrapper = ({
  children,
  text,
  secondText,
  style,
  childrenStyle,
  navigation,
  data,
}: {
  children: any;
  text: string;
  secondText?: string;
  style?: {};
  childrenStyle?: any;
  navigation: any;
  data: DATAITEMS[];
}) => {
  return (
    <View style={[style]}>
      <DescriptionComponent
        text={text}
        smalltext={secondText ? secondText : ''}
        style={styles.text}
        style2={styles.text1}
        onPress={() => navigation.navigate('ViewAll', {data: data})}
      />
      <View style={[styles.viewContainer, childrenStyle]}>{children}</View>
    </View>
  );
};

export default TextWrapper;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text: {
    color: '#918d8d',
    fontSize: 13,
    fontWeight: '400',
  },
  text1: {
    fontSize: 13,
    fontWeight: '400',
  },
  viewContainer: {
    marginTop: 0,
  },
});
