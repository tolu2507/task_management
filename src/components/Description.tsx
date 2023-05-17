/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function DescriptionComponent({text, smalltext,style}: Description) {
  return (
    <View style={styles.headerText}>
      <Text style={[styles.text1,style]}>{text}</Text>
      <Text style={[styles.text2,style]}>{smalltext}</Text>
    </View>
  );
}
interface Description {
  text: string;
  smalltext: string;
  style?: {};
}

const styles = StyleSheet.create({
  headerText: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  text1: {
    color: '#02010f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#4fce4f',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
