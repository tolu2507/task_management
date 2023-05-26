/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Text, Image, Pressable} from 'react-native';
import Title from '../components/Title';
import {SearchComponent} from '../components/Search';
import {ManagementContext} from '../store/context';
import {NOTIFICATIONITEMS} from '../data/data';
import {MaterialIcons} from '../utils/Icon';

const DetailsScreen = ({navigation}: any) => {
  const notificationCtx = useContext(ManagementContext);
  const {
    notifications,
    removeNotify,
  }: {notifications: NOTIFICATIONITEMS[]; removeNotify: (id: string) => void} =
    notificationCtx;
  function handlePress(): void {
    console.log('pressed in the notification 1');
  }

  function handleClick(): void {
    console.log('pressed in the notification 2');
  }

  function handlePressCard(item: NOTIFICATIONITEMS): void {
    console.log('pressed in the notification card');
    navigation.navigate('Card', {item: item});
  }

  function handleClickDelete(id: string): void {
    console.log('pressed in the notification delete');
    return removeNotify(id);
  }

  return (
    <View style={styles.scroll}>
      <Title
        style={styles.title}
        color={'#a13838'}
        icon1="arrow-back"
        icon2={'dots-horizontal'}
        name="Notifications"
        press1={handlePress}
        press2={handleClick}
      />

      <View style={styles.search}>
        <SearchComponent
          routeName={'Card'}
          navigation={navigation}
          data={notifications}
        />
      </View>

      <FlatList
        data={notifications}
        renderItem={({item}) => (
          <View>
            <Pressable
              style={({pressed}) => pressed && styles.pressed}
              android_ripple={{color: 'white'}}
              onPress={() => handlePressCard(item)}>
              <View style={styles.content}>
                {/* right side */}
                <View style={styles.imageContainer}>
                  {/* image */}
                  <Image source={item.image} style={styles.image} />
                </View>

                {/* left side */}
                <View style={styles.lowerContent}>
                  {/* name and date */}
                  <View style={styles.contents}>
                    <Text style={[styles.text, styles.textUpdate]}>
                      {item.name}
                    </Text>
                    <Text style={styles.text}>{item.date}</Text>
                  </View>

                  {/* description */}
                  <Text style={styles.text}>
                    {item.description.slice(0, 100) + '......'}
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={styles.icons}>
              <Pressable
                style={({pressed}) => pressed && styles.pressed}
                android_ripple={{color: 'white'}}
                onPress={() => handleClickDelete(item.id)}>
                <MaterialIcons size={35} name={'delete'} color={'red'} />
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item: NOTIFICATIONITEMS) => item.id}
      />
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  content: {borderBottomWidth: 1, padding: 7, flex: 1, flexDirection: 'row'},
  image: {width: '100%', height: '100%', borderRadius: 50},
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  lowerContent: {flex: 1, padding: 3, marginBottom: 15},
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: '500',
  },
  textUpdate: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '900',
  },
  scroll: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 60,
  },
  icons: {
    position: 'absolute',
    bottom: 1,
    marginLeft: 280,
  },
  pressed: {
    backgroundColor: '#f4e6ac',
    borderRadius: 25,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 25,
    color: '#240404',
  },
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
