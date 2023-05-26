/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {NOTIFICATIONITEMS} from '../data/data';
import {IonIcon} from '../utils/Icon';

const CardDetailsScreen = ({navigation, route}: any) => {
  const {item}: {item: NOTIFICATIONITEMS} = route.params;
  let comment = item.comment;
  useLayoutEffect(() => {
    return navigation.setOptions({
      title: item.name,
      headerLeft: () => {
        return (
          <Pressable
            style={({pressed}) => pressed && [styles.button, styles.button]}
            onPress={() => navigation.goBack()}>
            <View style={styles.headerContainer}>
              <IonIcon name={'arrow-back'} color={'#100000'} size={20} />
              <Image source={item.image} style={styles.image} />
            </View>
          </Pressable>
        );
      },
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.comment}>
        <View style={styles.scroll}>
          <FlatList
            data={comment}
            renderItem={itemData => (
              <View
                style={
                  itemData.item.name === item.name
                    ? styles.textView
                    : styles.textViews
                }>
                <View style={styles.cont}>
                  <View style={styles.imagesContainer}>
                    <Image source={itemData.item.image} style={styles.images} />
                  </View>
                  <View>
                    <View>
                      <Text>{itemData.item.name}</Text>
                    </View>
                    <Text style={styles.text}>{itemData.item.comments}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <Pressable
            style={({pressed}) =>
              pressed && [styles.button, {backgroundColor: '#381e1e'}]
            }>
            <View style={styles.buttons} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  cont: {flexDirection: 'row'},
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 3,
  },
  text: {color: 'black', fontSize: 15, fontWeight: '700'},
  button: {
    backgroundColor: '#c7c5c5',
    width: 60,
    height: 40,
    borderRadius: 15,
    marginRight: 20,
  },
  buttons: {
    backgroundColor: '#c7c5c5',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  image: {width: 30, height: 30, borderRadius: 15},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginRight: 20,
    width: 60,
    height: 40,
  },
  comment: {
    borderWidth: 1,
    height: 300,
    marginTop: 10,
  },
  content: {
    borderWidth: 1,
    flex: 1,
  },
  scroll: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 5,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 5,
  },
  input: {
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 10,
  },
  textView: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#7ab97a',
    borderRadius: 12,
  },
  textViews: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: '#08c408',
    borderRadius: 12,
  },
  images: {width: '100%', height: '100%', borderRadius: 20},
  imagesContainer: {width: 35, height: 35, borderRadius: 20, marginRight: 10},
});
