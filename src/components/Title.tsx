/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from './Pressable';
import {IonIcon, MaterialIcons} from '../utils/Icon';

const Title = ({navigation, style, color, icon1, icon2, name}: Title) => {
  return (
    <View style={styles.header}>
      <ButtonComponent
        style={styles.pressed}
        onPress={() => navigation.goBack()}>
        <IonIcon name={icon1} size={25} color={color} />
      </ButtonComponent>
      <Text style={[styles.text, style]}>{name}</Text>
      <ButtonComponent
        style={styles.pressed}
        onPress={() => console.log('pressed')}>
        <MaterialIcons size={25} name={icon2 ? icon2 : ''} color={color} />
      </ButtonComponent>
    </View>
  );
};

export default Title;

interface Title {
  navigation: any;
  style: {};
  color: any;
  icon1: string;
  icon2?: string;
  name: string;
}

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: '#86e683',
    borderRadius: 25,
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
});
