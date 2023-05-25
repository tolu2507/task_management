/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import TextWrapper from '../components/TextWrapper';
import PeopleGroupComponent from '../components/PeopleGroupComponent';
import {DATAITEMS} from '../data/data';
import Title from '../components/Title';

const TasksScreen = ({route, navigation}: any) => {
  const {item}: {item: DATAITEMS} = route.params;
  const [click, setClick] = useState(false);

  const clickStyle = {
    maxHeight: '100%',
  };

  let files = [];
  if (item.files.length >= 4) {
    files = [item.files[0], item.files[1], item.files[2], item.files[3]];
  } else {
    files = [...item.files];
  }

  function handlePress() {
    return navigation.goBack();
  }
  function handleClick() {
    console.log('pressed');
  }

  return (
    <View style={styles.container}>
      {/* top section */}

      <ImageBackground
        source={require('../../assets/pic7.png')}
        style={styles.image}>
        <View style={styles.headerBottom}>
          {/* header view with icons and text */}
          <Title
            style={styles.title}
            color={styles.iconColor}
            icon1="arrow-back"
            icon2="dots-horizontal"
            name="Task details"
            press1={handlePress}
            press2={handleClick}
          />
          {/* header content view  */}
          <View style={styles.content}>
            <TextWrapper text={'Task Title'}>
              <Text style={[styles.text, styles.title]}>{item.Title}</Text>
            </TextWrapper>
            <TextWrapper text={'Colleagues'}>
              <View>
                {item.people.map(person => (
                  <PeopleGroupComponent peopleItem={person} />
                ))}
              </View>
            </TextWrapper>
          </View>
        </View>
      </ImageBackground>

      {/* bottom section, */}
      <ScrollView style={styles.bottomView}>
        <TextWrapper text={'Project Description'} childrenStyle={clickStyle}>
          {click === false && item.description.length > 200 ? (
            <Text style={styles.text}>
              {item.description.slice(0, 200) + '...'}
              <Text style={styles.green} onPress={() => setClick(!click)}>
                Read more
              </Text>
            </Text>
          ) : (
            <Text style={styles.text}>
              {item.description}
              <Text style={styles.green} onPress={() => setClick(!click)}>
                Less
              </Text>
            </Text>
          )}
        </TextWrapper>

        <TextWrapper text={'Files and Links'} style={styles.file}>
          <View style={styles.squareContainer}>
            {files.map(items => items && <View style={styles.square} />)}
          </View>
        </TextWrapper>

        <TextWrapper text={'Task'} secondText="Add new task">
          {item.todo.map(todo => (
            <View style={styles.list}>
              <View style={styles.lists} />
              <Text style={styles.text}>{todo}</Text>
            </View>
          ))}
        </TextWrapper>
      </ScrollView>
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  texts: {
    height: 10,
    overflow: 'hidden',
    borderWidth: 1,
  },
  greenButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
  },
  iconColor: {
    color: '#fbfbfb',
  },
  pressed: {
    backgroundColor: '#86e683',
    borderRadius: 25,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 25,
    color: '#fbfbfb',
  },
  list: {
    padding: 15,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#f2feffcc',
  },
  lists: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#fcf7f7',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#457b80cc',
  },
  squareContainer: {
    flexDirection: 'row',
  },
  square: {
    width: 70,
    height: 85,
    borderWidth: 1,
    marginHorizontal: 2,
  },
  container: {
    flex: 1,
  },
  file: {
    marginVertical: 20,
  },
  image: {
    height: 250,
    borderWidth: 1,
  },
  bottomView: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerBottom: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
});
