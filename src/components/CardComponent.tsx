/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {DescriptionComponent} from './Description';
import {FontAwesomeIcon} from '../utils/Icon';

export function CardComponent({key}: any) {
  return (
    <View style={styles.contain} key={key}>
      <Pressable style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/pic.png')}
              style={styles.image}
            />
          </View>
          <View>
            <DescriptionComponent
              text={'Creating Website'}
              smalltext={'12 june 2022'}
              style={styles.fontSize}
            />
            <View style={styles.textView}>
              <Text>lorem posuiydjhchdfisofjejifch</Text>
              <Text>lorem posuiydjhchdfisofjejifch</Text>
            </View>
          </View>
          <View style={styles.textViews}>
            {/* right */}
            <View style={styles.smallView}>
              {/* group people */}
              <View
                style={[
                  styles.abs,
                  {marginLeft: 0, backgroundColor: '#636360'},
                ]}
              />
              <View
                style={[
                  styles.abs,
                  {marginLeft: 10, backgroundColor: 'yellow'},
                ]}
              />
              <View
                style={[
                  styles.abs,
                  {marginLeft: 20, backgroundColor: '#2b3988'},
                ]}
              />
              <View
                style={[
                  styles.abs,
                  {marginLeft: 30, backgroundColor: '#0ec24a'},
                ]}
              />
              <View
                style={[
                  styles.abs,
                  {marginLeft: 40, backgroundColor: '#3b3b34'},
                ]}
              />
            </View>

            {/* left */}
            <View style={styles.smallView}>
              <View style={styles.small}>
                <View style={[styles.row, {flex: 0, width: 30}]} />
                <View style={[styles.row, {backgroundColor: 'transparent'}]}>
                  <View style={styles.row}>
                    <FontAwesomeIcon size={12} color={'grey'} name={'home'} />
                    <Text>10</Text>
                  </View>
                  <View style={styles.row}>
                    <FontAwesomeIcon size={12} color={'grey'} name={'home'} />
                    <Text>10</Text>
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
    padding: 2,
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
