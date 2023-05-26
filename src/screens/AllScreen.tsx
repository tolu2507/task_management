/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DATAITEMS} from '../data/data';
import {CardListComponent} from '../components/CardListComponent';
import {SearchComponent} from '../components/Search';

const AllScreen = ({navigation, route}: any) => {
  const {data, name}: {data: DATAITEMS[]; name: string} = route.params;
  useLayoutEffect(() => {
    return navigation.setOptions({title: name});
  });
  return (
    <>
      <View style={styles.search}>
        <SearchComponent
          routeName={'Task'}
          navigation={navigation}
          data={data}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardListComponent
            item={item}
            key={item.id}
            navigation={navigation}
          />
        )}
      />
    </>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#fcf9f9',
    // minHeight: 60,
    marginHorizontal: 5,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
