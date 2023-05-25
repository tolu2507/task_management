/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {HeaderComponent} from '../components/Header.component';
import {SearchComponent} from '../components/Search';
import {DescriptionComponent} from '../components/Description';
import {CardComponent} from '../components/CardComponent';
import {CardListComponent} from '../components/CardListComponent';
import {ManagementContext} from '../store/context';
import {DATAITEMS} from '../data/data';

const HomeScreen = ({navigation}: any) => {
  const Todoctx = useContext(ManagementContext);

  return (
    <View style={styles.contain}>
      {/* top section with image and icon */}
      <HeaderComponent />
      {/* search view */}
      <View style={styles.search}>
        <SearchComponent />
      </View>

      <ScrollView>
        <View>
          {/* description */}
          <DescriptionComponent text={'On going task'} smalltext={'View All'} />
          {/* card horizontal view */}
          <View style={styles.card}>
            {/* card view */}
            <ScrollView horizontal={true}>
              {Todoctx.data.map((item: DATAITEMS) => (
                <CardComponent
                  item={item}
                  navigation={navigation}
                  key={item.id}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        {/* break */}
        <View>
          {/* description */}
          <DescriptionComponent
            text={'Daily Activity'}
            smalltext={'View All'}
          />
          {/* card horizontal view */}
          <View style={styles.scroll}>
            {/* card view */}
            {Todoctx.data.map((item: DATAITEMS) => (
              <CardListComponent item={item} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  scroll: {
    marginBottom: 50,
    flex: 1,
  },
  contain: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
  },
  search: {
    backgroundColor: '#fcf9f9',
    height: 60,
    marginHorizontal: 5,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});
