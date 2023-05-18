/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {HeaderComponent} from '../components/Header.component';
import {SearchComponent} from '../components/Search';
import {DescriptionComponent} from '../components/Description';
import {CardComponent} from '../components/CardComponent';
import { CardListComponent } from '../components/CardListComponent';
import { ManagementContext } from '../store/context';

const HomeScreen = () => {
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
              {Todoctx.data.map(item => (
                <CardComponent key={item} />
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
          <View>
            {/* card view */}
            {Todoctx.data.map(item => (
              <CardListComponent key={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
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
