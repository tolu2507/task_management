/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComponent from './Pressable';
import {IonIcon, MaterialIcons} from '../utils/Icon';

const Title = ({
  style,
  color,
  icon1,
  icon2,
  name,
  name1,
  name2,
  press1,
  press2,
}: Title) => {
  let text1 = name1
    ? {
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: '700',
        color: '#cd4848',
      }
    : {};
  let text2 = name2
    ? {
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: '700',
        color: '#077927',
      }
    : {};
  return (
    <View style={styles.header}>
      <ButtonComponent style={styles.pressed} onPress={press1}>
        {icon1 && <IonIcon name={icon1} size={25} color={color} />}
        {name1 && <Text style={[styles.text, text1]}>{name1}</Text>}
      </ButtonComponent>
      <Text style={[styles.text, style]}>{name}</Text>
      <ButtonComponent style={styles.pressed} onPress={press2}>
        {icon2 && (
          <MaterialIcons size={25} name={icon2 ? icon2 : ''} color={color} />
        )}
        {name2 && <Text style={[styles.text, text2]}>{name2}</Text>}
      </ButtonComponent>
    </View>
  );
};

export default Title;

interface Title {
  style: {};
  color: any;
  icon1?: string;
  icon2?: string;
  name: string;
  name1?: string;
  name2?: string;
  press1: () => void;
  press2: () => void;
}

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: '#86e683',
    borderRadius: 25,
    pqdding: 10,
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
