/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import {Modal, StyleSheet, ScrollView} from 'react-native';
import {View} from 'react-native';
import TextWrapper from './TextWrapper';
import {TextInput} from 'react-native';
import Title from './Title';
import {formatDate} from '../hooks/week';
import {Calendar} from 'react-native-calendars';
import {Text} from 'react-native';
import ButtonComponent from './Pressable';
import {DATAITEMS, People} from '../data/data';
import useImage, {generateRandomId} from '../hooks/image';
import {ManagementContext} from '../store/context';

export default function ModalComponent({
  modal,
  handlePress,
  navigation,
}: MODAL) {
  const Modalctx = useContext(ManagementContext);
  const [calender, setCalender] = useState<string>(formatDate(new Date()));
  const [cal, setCal] = useState<boolean>(false);
  const [files, setFiles] = useState<string>('');
  const [file, setFile] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<string>('');
  const [attachment, setAttachment] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [end] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [peoples, setPeoples] = useState<People[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const image = useImage();
  const items: {
    name: 'todo' | 'attachments' | 'files' | 'people';
    key: number;
    value: string;
    setter: any;
  }[] = [
    {name: 'todo', key: 1, value: todo, setter: setTodo},
    {name: 'people', key: 2, value: people, setter: setPeople},
    {name: 'files', key: 3, value: files, setter: setFiles},
    {
      name: 'attachments',
      key: 4,
      value: attachments,
      setter: setAttachments,
    },
  ];
  const {add} = Modalctx;

  function handlePressButon() {
    setCal(!cal);
  }

  function handlePressButton(
    type: 'todo' | 'attachments' | 'files' | 'people',
  ) {
    console.log(type);
    if (type) {
      if (type === 'todo' && todo !== '') {
        setTodos(prev => [todo, ...prev]);
        return setTodo('');
      }
      if (type === 'files' && files !== '') {
        setFile(prev => [files, ...prev]);
        return setFiles('');
      }
      if (type === 'people' && people !== '') {
        setPeoples(prev => [
          {
            image: require('../../assets/pic4.png'),
            margin: prev.length,
            name: people,
          },
          ...prev,
        ]);
        console.log(peoples);
        return setPeople('');
      }
      if (type === 'attachments' && attachments !== '') {
        setAttachment(prev => [attachments, ...prev]);
        return setAttachments('');
      }
    }
    return;
  }

  function handleSave() {
    if (
      calender !== '' &&
      file.length !== 0 &&
      attachment.length !== 0 &&
      todos.length !== 0 &&
      peoples.length !== 0 &&
      end === '' &&
      title !== '' &&
      description !== '' &&
      startTime !== '' &&
      endTime === ''
    ) {
      let details: DATAITEMS = {
        id: generateRandomId(),
        image: image,
        Title: title,
        description: description,
        date: calender,
        time: startTime,
        endTime: endTime,
        endDate: end,
        todo: todos,
        people: peoples,
        files: file,
        attachments: attachment,
      };
      add(details);
      handlePress();
      return navigation.goBack();
    }
    return;
  }

  if (cal) {
    return (
      <Calendar
        onDayPress={day => {
          setCalender(formatDate(new Date(day.dateString)));
          return setCal(!cal);
        }}
      />
    );
  }

  return (
    <Modal
      presentationStyle="pageSheet"
      animated={true}
      animationType="slide"
      visible={modal}
      style={styles.container}>
      <View style={[styles.modal]}>
        <View style={styles.header}>
          <Title
            style={styles.title}
            color={'black'}
            name1={'discard'}
            name2="Save"
            name="Add task"
            press1={handlePress}
            press2={handleSave}
          />
        </View>
        <ScrollView style={styles.scroll}>
          <TextWrapper text={'Title and Description'}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Enter title....."
                placeholderTextColor={'#999595'}
                onChangeText={setTitle}
                value={title}
                style={[styles.input, styles.b]}
              />
              <View style={styles.inputViewContent}>
                <TextInput
                  placeholder="Discription (Explain your task) ........"
                  placeholderTextColor={'#999595'}
                  multiline={true}
                  onChangeText={setDescription}
                  value={description}
                  style={styles.input}
                />
              </View>
            </View>
          </TextWrapper>
          <TextWrapper text="Execution time">
            <View style={styles.inputView}>
              <View style={styles.dateTime}>
                <View style={styles.date}>
                  <Text style={styles.text}>Enter Date started (click me)</Text>
                  <View style={styles.dates}>
                    <ButtonComponent
                      style={styles.pressed}
                      onPress={handlePressButon}>
                      <Text>{calender}</Text>
                    </ButtonComponent>
                  </View>
                </View>
                <View style={styles.times}>
                  <Text style={styles.text}>Start time</Text>
                  <View style={styles.time}>
                    <TextInput
                      textAlign="center"
                      onChangeText={setStartTime}
                      value={startTime}
                      style={styles.input}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.dateTime}>
                <View style={styles.times}>
                  <Text style={styles.text}>End time</Text>
                  <View style={styles.time}>
                    <TextInput
                      textAlign="center"
                      onChangeText={setEndTime}
                      value={endTime}
                      style={styles.input}
                    />
                  </View>
                </View>
                <View style={styles.date}>
                  <Text style={[styles.text, styles.ended]}>
                    Enter Date Ended (click me)
                  </Text>
                  <View style={styles.dates}>
                    <ButtonComponent
                      disabled={true}
                      style={styles.pressed}
                      onPress={handlePressButon}>
                      <Text>{end}</Text>
                    </ButtonComponent>
                  </View>
                </View>
              </View>
            </View>
          </TextWrapper>
          {items.map(({name, key, value, setter}) => (
            <TextWrapper text={name} key={key}>
              <View style={styles.inputView}>
                <View style={styles.dateTime}>
                  <View style={styles.timess}>
                    <Text style={styles.text}>Enter {name}...</Text>
                    <View style={styles.time}>
                      <TextInput
                        placeholder={name}
                        placeholderTextColor={'#c4c0c0'}
                        textAlign="center"
                        onChangeText={setter}
                        value={value}
                        style={styles.input}
                      />
                    </View>
                  </View>
                  <View style={styles.button}>
                    <ButtonComponent
                      style={styles.pressed}
                      onPress={() => handlePressButton(name)}>
                      <Text>ADD</Text>
                    </ButtonComponent>
                  </View>
                </View>
              </View>
            </TextWrapper>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

interface MODAL {
  modal: boolean;
  handlePress: () => void;
  navigation: any;
}

const styles = StyleSheet.create({
  b: {fontSize: 20, color: 'black'},
  scroll: {marginBottom: 120},
  button: {
    borderRadius: 15,
    backgroundColor: '#130101',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  input: {color: 'black', fontSize: 16, fontWeight: '500'},
  ended: {
    textAlign: 'right',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  inputView: {
    padding: 6,
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
  },
  inputViewContent: {
    borderTopWidth: 2,
    borderTopColor: '#d7d3d3',
    height: 120,
  },
  modal: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: 25,
    color: '#140101',
  },
  container: {
    // flex: 1,
    backgroundColor: 'green',
    borderColor: 'red',
    borderWidth: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcd0d0',
    marginVertical: 20,
  },
  date: {
    flex: 1,
    borderRadius: 15,
  },
  dates: {
    borderRadius: 15,
    backgroundColor: '#130101',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  times: {
    padding: 10,
    borderRadius: 15,
    width: 90,
  },
  timess: {
    padding: 10,
    borderRadius: 15,
    // width: 90,
    flex: 1,
  },
  time: {
    borderRadius: 15,
    backgroundColor: '#f0e2e2',
  },
  dateTime: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressed: {
    backgroundColor: '#d19d9d',
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
