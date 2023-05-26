/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';
import {dataItems, notifications, Person} from '../data/data';
import {useGetWeekRange} from '../hooks/week';

export const ManagementContext = createContext({
  data: [],
  onGoing: [],
  person: {image: '', name: ''},
  notifications: [],
  comments: [],
  add: data => {},
  remove: (id, navigation) => {},
  addDailyTask: (data, id, navigation) => {},
  removeDailyTask: (id, navigation) => {},
  updateTask: (item, id, navigation) => {},
  checkTask: (item, id, navigation) => {},
  addComment: comment => {},
  removeNotify: id => {},
});

export function TaskContextProvider({children}) {
  const [manageTasks, setManageTasks] = useState(dataItems);
  const [daily, setDaily] = useState([]);
  const [comment, setComment] = useState([]);
  const [notification, setNotification] = useState(notifications);

  function addToTask(task) {
    setManageTasks(prevTask => [...prevTask, task]);
  }

  function removeFromTask(id) {
    setManageTasks(prevTask => prevTask.filter(task => task.id !== id));
  }
  // (element) => element === name)
  function addDailyTask(data, id) {
    const awaits = manageTasks.findIndex(task => task.id === id);
    if (awaits) {
      manageTasks[awaits] = data;
    }
    return setDaily(prev => [...prev, data]);
  }

  function removeDailyTask(id) {
    setDaily(prevTask => prevTask.filter(task => task.id !== id));
  }

  function upDateTask(item, id, navigation) {
    const index = manageTasks.findIndex(task => task.id === id.id);
    let todoItems = manageTasks[index];
    let obj = {...todoItems, todos: [...todoItems.todos, item]};
    manageTasks[index] = obj;
    console.log(todoItems);
    return navigation.navigate('Task', {item: id});
  }

  function checkDone(item, id, navigation) {
    const index = manageTasks.findIndex(task => task.id === id.id);
    let todoItems = manageTasks[index];
    console.log(todoItems);
    console.log('========================');
    let todoArray = todoItems.todos;
    console.log(todoArray);
    console.log('========================');
    let todoIndex = todoArray.findIndex(tasks => tasks.todo === item.todo);
    let todoObj = todoArray[todoIndex];
    let todo = {...todoObj, complete: item.complete === false ? true : false};
    console.log(todo);
    console.log('========================');
    todoArray[todoIndex] = todo;
    let returnItem = {...todoItems, todos: todoArray};
    console.log(returnItem);
    console.log('========================');
    manageTasks[index] = returnItem;
    console.log(
      '=========================todoItems=================================',
    );
    console.log(todoItems);

    return navigation.navigate('Task', {item: id});
  }

  function addComment(comments) {
    if (comment.length < 0) {
      return;
    }
    return setComment(prev => [...prev, comments]);
  }
  function addNotification(id) {
    setNotification(prev => prev.filter(task => task.id !== id));
  }

  const values = {
    data: manageTasks,
    onGoing: daily,
    person: Person,
    notifications: notification,
    add: addToTask,
    remove: removeFromTask,
    addDailyTask: addDailyTask,
    removeDailyTask: removeDailyTask,
    updateTask: upDateTask,
    checkTask: checkDone,
    addComment: addComment,
    removeNotify: addNotification,
  };

  return (
    <ManagementContext.Provider value={values}>
      {children}
    </ManagementContext.Provider>
  );
}
