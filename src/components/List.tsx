/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DATAITEMS} from '../data/data';

export const List = ({items}: {items: DATAITEMS}) => {
  let backgroundColor = items.time === '12:00' ? '#000000' : '#fff';
  let textColor = items.time !== '12:00' ? '#000000' : '#fff';
  return (
    <View style={styles.task}>
      <View style={styles.subtask}>
        <Text style={styles.text}>{items.time}</Text>
      </View>
      <View
        style={[styles.task, styles.flex, {backgroundColor: backgroundColor}]}>
        <View style={[styles.flex]}>
          <Text style={[styles.text, styles.cap, {color: textColor}]}>
            {items.Title.length > 30
              ? items.Title.slice(0, 30) + '....'
              : items.Title}
          </Text>
          {items.todo.map(item => (
            <View style={styles.list}>
              <View style={styles.lists} />
              <Text style={[styles.text, {color: textColor}]}>
                {item.length > 27 ? item.slice(0, 27) + '..' : item}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.subtasks}>
          {/* dsds */}
          <Text>1:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    padding: 2,
  },
  cap: {
    fontSize: 17,
    fontWeight: '900',
  },
  task: {
    flexDirection: 'row',
    paddingBottom: 5,
    borderRadius: 8,
    // backgroundColor: '#f1f4ea',
    margin: 4,
  },
  subtask: {
    width: 32,
    marginHorizontal: 3,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  list: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  lists: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fcf7f7',
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#457b80cc',
  },
  subtasks: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#703535',
  },
});
