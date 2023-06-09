/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Pressable} from 'react-native';
import {OctiIcon} from '../utils/Icon';
import {DATAITEMS, NOTIFICATIONITEMS} from '../data/data';

export function SearchComponent({routeName, navigation, data}: SEARCH) {
  const [value, setValue] = useState('');

  function handlePress(item: DATAITEMS | NOTIFICATIONITEMS) {
    navigation.navigate(routeName, {item: item});
  }

  return (
    <>
      <View style={styles.searchContainer}>
        {/* input with a search icon and button */}
        <OctiIcon size={20} name={'search'} color={'#796464'} />
        <TextInput
          placeholder="Search Anything..............."
          value={value}
          onChangeText={setValue}
          style={styles.inputContainer}
          placeholderTextColor={'black'}
        />
      </View>
      <View style={styles.textContainers}>
        {data.map((search: DATAITEMS | NOTIFICATIONITEMS, i) => {
          if (value.toLowerCase() === '') {
            return;
          }
          if (search.Title.toLowerCase().includes(value.toLowerCase())) {
            return (
              <Pressable
                key={i}
                style={styles.textContainer}
                onPress={() => handlePress(search)}>
                <Text style={styles.search}>{search.Title}</Text>
              </Pressable>
            );
          }
        })}
      </View>
    </>
  );
}
interface SEARCH {
  routeName: 'Task' | 'Card';
  navigation: any;
  data: any[];
}

const styles = StyleSheet.create({
  search: {color: '#f3f2f2'},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // height: 60,
  },
  inputContainer: {
    marginLeft: 3,
    padding: 10,
    height: 50,
    flex: 1,
    color: 'black',
  },
  textContainer: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#471616',
    marginBottom: 5,
  },
  textContainers: {
    width: '100%',
    backgroundColor: '#cbcaca',
    padding: 5,
    borderRadius: 15,
  },
});
