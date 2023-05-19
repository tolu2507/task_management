/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {ManagementContext} from '../store/context';
import {MaterialIcons} from '../utils/Icon';

export function HeaderComponent() {
  const PersonCtx = useContext(ManagementContext);
  const {person} = PersonCtx;
  return (
    <View style={styles.container}>
      <View style={styles.large}>
        {/* picture and name */}
        <View style={styles.imageContainer}>
          <Image source={{uri: person.image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Welcome Back!!</Text>
          <Text style={styles.text2}>{person.name}</Text>
        </View>
      </View>
      <Pressable style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.icon}>
          {/* icon */}

          <MaterialIcons size={30} name={'dots-horizontal'} color={'#0d1100'} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    // borderWidth: 1,
    padding: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  large: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text1: {
    color: '#72717e',
    fontSize: 15,
    fontWeight: '500',
  },
  text2: {
    color: '#14011b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    backgroundColor: '#86863f',
    borderRadius: 25,
  },
});
