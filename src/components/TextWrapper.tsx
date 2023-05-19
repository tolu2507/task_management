/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DescriptionComponent} from './Description';

const TextWrapper = ({
  children,
  text,
  secondText,
}: {
  children: any;
  text: string;
  secondText?: string;
}) => {
  return (
    <View>
      <DescriptionComponent
        text={text}
        smalltext={secondText ? secondText : ''}
        style={styles.text}
        style2={styles.text1}
      />
      <View style={styles.viewContainer}>{children}</View>
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
    marginTop: 30,
  },
});
