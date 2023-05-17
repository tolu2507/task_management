/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '../utils/Icon';

export function CardListComponent({key}: any) {
  return (
    <View style={styles.contain} key={key}>
      <Pressable style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/pic.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.BoxContainer}></View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#fffefe',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    },
    boxContainer: {
      
  }
  imageContainer: {
    borderRadius: 15,
    height: 50,
    width: 50,
    backgroundColor: '#8b6d6d',
  },
  contain: {
    margin: 5,
    overflow: 'hidden',
    borderRadius: 15,
  },
  pressed: {
    opacity: 0.2,
    borderRadius: 25,
    backgroundColor: '#f3f0f0',
  },
});
