/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {OctiIcon} from '../utils/Icon';

export function SearchComponent() {
  const [value, setValue] = useState('');
  return (
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
  );
}

const styles = StyleSheet.create({
  search: {},
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
});
