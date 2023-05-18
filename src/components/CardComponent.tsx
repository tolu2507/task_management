/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {DescriptionComponent} from './Description';
import {FontAwesomeIcon} from '../utils/Icon';
import {DATAITEMS} from '../data/data';

export function CardComponent({item}: {item: DATAITEMS}) {
  console.log(item);

  const {image, Title, attachments, date, people, todo, files} = item;

  return (
    <View style={styles.contain}>
      <Pressable style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View>
            <DescriptionComponent
              text={Title.length > 15 ? Title.slice(0, 16) + '...' : Title}
              smalltext={date}
              style={styles.fontSize}
            />
            <View style={styles.textView}>
              {Array.isArray(todo) && todo.map(text => <Text>{text}</Text>)}
            </View>
          </View>
          <View style={styles.textViews}>
            {/* right */}
            <View style={styles.smallView}>
              {/* group people */}
              {people.map(peopleItem => (
                <View
                  style={[
                    styles.abs,
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
              ))}
            </View>

            {/* left */}
            <View style={styles.smallView}>
              <View style={styles.small}>
                <View style={[styles.row, {flex: 0, width: 30}]} />
                <View style={[styles.row, {backgroundColor: 'transparent'}]}>
                  <View style={styles.row}>
                    <FontAwesomeIcon size={12} color={'grey'} name={'home'} />
                    <Text>{attachments.length}</Text>
                  </View>
                  <View style={styles.row}>
                    <FontAwesomeIcon size={12} color={'grey'} name={'home'} />
                    <Text>{files.length}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  abs: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'green',
    position: 'absolute',
  },
  card: {
    width: 270,
    height: 290,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fffefe',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  imageContainer: {
    borderRadius: 20,
    height: 135,
    backgroundColor: '#8b6d6d',
  },
  fontSize: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  contain: {
    margin: 5,
    overflow: 'hidden',
    borderRadius: 25,
  },
  pressed: {
    opacity: 0.2,
    borderRadius: 25,
    backgroundColor: '#f3f0f0',
  },
  textView: {
    padding: 0,
    textAlign: 'flex-start',
  },
  textViews: {
    padding: 2,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  smallView: {
    padding: 2,
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  small: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#d1c5c5',
    margin: 2,
    borderRadius: 5,
  },
});
