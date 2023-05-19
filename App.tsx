/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabScreen from './src/navigators/TabNavigator';
import {TaskContextProvider} from './src/store/context';
import TasksScreen from './src/screens/TasksScreen';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Task"
            component={TasksScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
}

export default App;
