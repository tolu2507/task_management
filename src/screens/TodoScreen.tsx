/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Title from '../components/Title';
import TextWrapper from '../components/TextWrapper';
import Calendar, {useGetWeekRange} from '../hooks/week';
import {IonIcon} from '../utils/Icon';
import ButtonComponent from '../components/Pressable';
import {ManagementContext} from '../store/context';
import {List} from '../components/List';
import ModalComponent from '../components/ModalComponent';

const TodoScreen = ({navigation}: TODO) => {
  const [modal, setModal] = useState(false);
  const currentDate = useGetWeekRange();
  const Todoctx = useContext(ManagementContext);
  const data = Todoctx.data;

  function handlePress() {
    console.log('pressing');
    setModal(!modal);
  }
  function handleBack() {
    console.log('saving');
    navigation.goBack();
  }
  function handleClick() {
    console.log('pressed');
  }

  if (modal) {
    return (
      <ModalComponent
        modal={modal}
        handlePress={handlePress}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Title
            style={styles.title}
            color={'black'}
            icon1={'arrow-back'}
            icon2="calendar"
            name="August"
            press1={handleBack}
            press2={handleClick}
          />
          <TextWrapper text={'Today'}>
            <Text style={[styles.text, styles.title]}>{currentDate.today}</Text>
          </TextWrapper>
          <Calendar />
        </View>
        <View style={styles.cc}>
          <View style={styles.mm}>
            <Text style={styles.textTask}>Today task</Text>
          </View>
          <FlatList
            data={data}
            renderItem={item => <List items={item.item} />}
          />
        </View>
        <View style={styles.buttonView}>
          <ButtonComponent style={styles.pressed} onPress={handlePress}>
            <View style={styles.button}>
              <IonIcon size={30} name={'add'} color={'#f9f9f9'} />
            </View>
          </ButtonComponent>
        </View>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  mm: {
    marginBottom: 20,
  },
  cc: {
    paddingBottom: 57,
    flex: 1,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 25,
    color: '#140101',
  },
  buttonView: {
    position: 'absolute',
    bottom: 60,
    marginLeft: 280,
  },
  pressed: {
    borderRadius: 25,
    backgroundColor: '#f6d39c',
    overflow: 'hidden',
    flex: 1,
  },
  textTask: {
    color: '#918d8d',
    fontSize: 13,
    fontWeight: '400',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#220101',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 8,
  },
  container: {
    flex: 1,
  },
  content: {flex: 1, marginHorizontal: 20, position: 'relative'},
  text: {
    color: 'black',
    fontWeight: '500',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcd0d0',
    marginVertical: 20,
  },
});

export interface TODO {
  navigation: any;
}
