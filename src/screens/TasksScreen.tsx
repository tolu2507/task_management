/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useContext, useState, useLayoutEffect} from 'react';
import TextWrapper from '../components/TextWrapper';
import PeopleGroupComponent from '../components/PeopleGroupComponent';
import {DATAITEMS} from '../data/data';
import Title from '../components/Title';
import {ManagementContext} from '../store/context';
import ButtonComponent from '../components/Pressable';

const TasksScreen = ({route, navigation}: any) => {
  const {item}: {item: DATAITEMS} = route.params;
  const [click, setClick] = useState(false);
  const [icon, setIcon] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState('');
  const [detail, setDetail] = useState<{todo: string; complete: boolean}[]>([]);
  const taskCtx = useContext(ManagementContext);
  const details: DATAITEMS = {...item, started: item.started ? false : true};

  const clickStyle = {
    maxHeight: '100%',
  };

  let files = [];
  if (item.files.length >= 4) {
    files = [item.files[0], item.files[1], item.files[2], item.files[3]];
  } else {
    files = [...item.files];
  }

  useLayoutEffect(() => {
    if (taskCtx) {
      let index = taskCtx.data.findIndex(
        (elem: DATAITEMS) => elem.id === item.id,
      );
      let taskObj: DATAITEMS = taskCtx.data[index];
      let taskArray = taskObj.todos;
      return setDetail(taskArray);
    }
  }, [taskCtx, item.id, todo, detail]);

  function handleClickItem() {
    return navigation.navigate('ViewAll', {data: details});
  }

  function handlePress() {
    return navigation.goBack();
  }
  function handleClick() {
    setIcon(!icon);
    if (
      taskCtx.onGoing.findIndex(
        (elemnet: DATAITEMS) => elemnet.id === details.id,
      ) !== -1
    ) {
      return taskCtx.removeDailyTask(details.id);
    }
    return taskCtx.addDailyTask(details, details.id);
  }
  let returner;
  if (icon) {
    returner = {
      color: '#a14545',
    };
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
            color={[styles.iconColor, returner]}
            icon1="arrow-back"
            icon2={item.started === false ? 'dots-horizontal' : 'delete'}
            name="Task details"
            press1={handlePress}
            press2={handleClick}
          />

          {/* header content view  */}
          <View style={styles.content}>
            <TextWrapper text={'Task Title'} onPress={handleClickItem}>
              <Text style={[styles.text, styles.title]}>{item.Title}</Text>
            </TextWrapper>
            <TextWrapper text={'Colleagues'} onPress={handleClickItem}>
              <View>
                {item.people.map(person => (
                  <PeopleGroupComponent
                    peopleItem={person}
                    key={person.margin}
                  />
                ))}
              </View>
            </TextWrapper>
          </View>
        </View>
      </ImageBackground>

      {/* bottom section, */}
      <ScrollView style={styles.bottomView}>
        <TextWrapper
          text={'Project Description'}
          childrenStyle={clickStyle}
          onPress={handleClickItem}>
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

        <TextWrapper
          text={'Files and Links'}
          style={styles.file}
          onPress={handleClickItem}>
          <View style={styles.squareContainer}>
            {files.map(
              (items, i) => items && <View style={styles.square} key={i} />,
            )}
          </View>
        </TextWrapper>

        {toggle && (
          <TextWrapper text={'Todo'} onPress={handleClickItem}>
            <View style={styles.inputView}>
              <View style={styles.dateTime}>
                <View style={styles.timess}>
                  <Text style={styles.text}>Enter {'todo'}...</Text>
                  <View style={styles.time}>
                    <TextInput
                      placeholder={'todo'}
                      placeholderTextColor={'#a19191'}
                      textAlign="center"
                      onChangeText={setTodo}
                      value={todo}
                      style={styles.input}
                    />
                  </View>
                </View>
                <View style={styles.button}>
                  <ButtonComponent
                    style={styles.pressed}
                    onPress={() => {
                      if (todo.length > 0) {
                        let sendItem = {todo: todo, complete: false};
                        setToggle(!toggle);
                        taskCtx.updateTask(sendItem, details, navigation);
                        return navigation.navigate('Task', {item: details});
                      }
                    }}>
                    <Text>ADD</Text>
                  </ButtonComponent>
                </View>
              </View>
            </View>
          </TextWrapper>
        )}

        {!toggle && (
          <TextWrapper
            text={'Task'}
            secondText="Add new task"
            onPress={() => setToggle(!toggle)}>
            {detail.map((todoItem, i) => (
              <Pressable
                style={styles.list}
                key={i}
                onPress={() =>
                  taskCtx.checkTask(todoItem, details, navigation)
                }>
                <View
                  style={[styles.lists, todoItem.complete && styles.greens]}
                />
                <Text style={styles.text}>{todoItem.todo}</Text>
              </Pressable>
            ))}
          </TextWrapper>
        )}
      </ScrollView>
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    backgroundColor: '#130101',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  input: {color: 'black', fontSize: 16, fontWeight: '500'},
  inputView: {
    padding: 6,
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
  },
  greens: {backgroundColor: 'green'},
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
  iconColors: {
    color: '#a14545',
  },
  // pressed: {
  //   backgroundColor: '#86e683',
  //   borderRadius: 25,
  // },
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
