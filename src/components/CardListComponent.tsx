/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '../utils/Icon';
import {DATAITEMS} from '../data/data';

export function CardListComponent({
  item,
  navigation,
}: {
  item: DATAITEMS;
  navigation: any;
}) {
  const {Title, todos} = item;
  const {navigate} = navigation;
  function handlePress() {
    navigate('Task', {item: item});
  }
  return (
    <View style={styles.contain}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={handlePress}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <View style={styles.image}>
              <FontAwesomeIcon size={25} name={'tasks'} color={'#0ff5ce'} />
            </View>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.text}>
              {Title.length > 30 ? Title.slice(0, 25) + '......' : Title}
            </Text>
            <View style={styles.todo}>
              {todos.map((items: {todo: string; complete: boolean}, i: any) => (
                <View style={styles.textView} key={i}>
                  <View
                    style={[styles.smallCircle, items.complete && styles.green]}
                  />
                  <Text style={styles.texts}>{items.todo}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  green: {backgroundColor: 'green'},
  card: {
    height: 120,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#fffefe',
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flex: 1,
  },
  imageContainer: {
    borderRadius: 15,
    height: 50,
    width: 50,
    backgroundColor: '#e9e7e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
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
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#3a3a3b',
  },
  todo: {
    marginVertical: 7,
    padding: 3,
  },
  textView: {
    padding: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  smallCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#f5f2f2',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  texts: {
    color: 'black',
  },
});
