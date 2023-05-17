/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabsArray from '../data/data';

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#384b55',
        tabBarActiveTintColor: '#8a3737',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          padding: 20,
        },
      }}>
      {TabsArray.map(({name, component, icon}) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarIcon: ({size, color}) => icon(size, color),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
export default TabScreen;
