/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useState} from 'react';
import {dataItems, Person} from '../data/data';
import {useGetWeekRange} from '../hooks/week';

export const ManagementContext = createContext({
  data: [],
  onGoing: [],
  person: {image: '', name: ''},
  add: data => {},
  remove: id => {},
  addDailyTask: (data, id) => {},
  removeDailyTask: id => {},
});

export function TaskContextProvider({children}) {
  const [manageTasks, setManageTasks] = useState(dataItems);
  const [daily, setDaily] = useState([]);

  function addToTask(task) {
    setManageTasks(prevTask => [...prevTask, task]);
  }

  function removeFromTask(id) {
    setManageTasks(prevTask => prevTask.filter(task => task.id !== id));
  }
// (element) => element === name)
  function addDailyTask(data, id) {
    const awaits = manageTasks.findIndex((task)=>task.id === id);
    if (awaits) {
      manageTasks[awaits] = data;
    }
    return setDaily(prev => [...prev, data]);
  }

  function removeDailyTask(id) {
    setDaily(prevTask => prevTask.filter(task => task.id !== id));
  }

  const values = {
    data: manageTasks,
    onGoing: daily,
    person: Person,
    add: addToTask,
    remove: removeFromTask,
    addDailyTask: addDailyTask,
    removeDailyTask: removeDailyTask,
  };

  return (
    <ManagementContext.Provider value={values}>
      {children}
    </ManagementContext.Provider>
  );
}
