/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
import { dataItems} from '../data/data';

export const ManagementContext = createContext({
  data: [],
  add: data => {},
  remove: id => {},
});

export function TaskContextProvider({children}) {
  const [manageTasks, setManageTasks] = useState(dataItems);

  function addToTask(task) {
    setManageTasks(prevTask => [...prevTask, task]);
  }

  function removeFromTask(id) {
    setManageTasks(prevTask => prevTask.filter(task => task.id !== id));
  }

  const values = {
    data: manageTasks,
    add: addToTask,
    remove: removeFromTask,
  };

  return (
    <ManagementContext.Provider value={values}>
      {children}
    </ManagementContext.Provider>
  );
}
