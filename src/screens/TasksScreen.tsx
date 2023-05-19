/* eslint-disable prettier/prettier */
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextWrapper from '../components/TextWrapper';
import PeopleGroupComponent from '../components/PeopleGroupComponent';
import {DATAITEMS} from '../data/data';

const TasksScreen = ({route}: any) => {
  const {item}: {item: DATAITEMS} = route.params;

  return (
    <View style={styles.container}>
      {/* top section */}
      <ImageBackground
        source={require('../../assets/pic3.png')}
        style={styles.image}>
        <View>
          {/* header view with icons and text */}
          <View style={styles.header}>
            <Text>back</Text>
            <Text>Task details</Text>
            <Text>icon</Text>
          </View>

          {/* header content view  */}
          <View>
            <TextWrapper text={'Task Title'}>
              <Text>{item.Title}</Text>
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
      <View style={styles.bottomView}>
        <TextWrapper text={'Project Description'}>
          <Text>hsghscsjhc</Text>
        </TextWrapper>

        <TextWrapper text={'Files and Links'}>
          <View>
            {item.files.map(items => (
              <View>
                <Text>{items}</Text>
              </View>
            ))}
          </View>
        </TextWrapper>

        <TextWrapper text={'Task'} secondText="Add new task">
          {item.todo.map(todo => (
            <View>
              <View />
              <Text>{todo}</Text>
            </View>
          ))}
        </TextWrapper>
      </View>
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 400,
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  bottomView: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderWidth: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
