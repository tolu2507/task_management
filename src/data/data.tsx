/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TodoScreen from '../screens/TodoScreen';
import {
  EntypoIcon,
  FontAwesomeIcon,
  IonIcon,
  MaterialIcon,
} from '../utils/Icon';

export interface People {
  image: any;
  margin?: number;
  name: string;
}
export interface DATAITEMS {
  id: string;
  image: any;
  Title: string;
  description: string;
  date: string;
  todo: string[];
  people: People[];
  files: string[];
  attachments: string[];
}

export const dataItems: DATAITEMS[] = [
  {
    id: '1',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long as i please.',
    date: '19 june 2022',
    todo: [
      'Create a website for job search',
      'Deadline 3 weeks starting august',
    ],
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    files: ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    attachments: [
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
    ],
  },
  {
    id: '2',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long as i please.',
    date: '19 june 2022',
    todo: [
      'Create a website for job search',
      'Deadline 3 weeks starting august',
    ],
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    files: ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    attachments: [
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
    ],
  },
  {
    id: '3',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long as i please.',
    date: '19 june 2022',
    todo: [
      'Create a website for job search',
      'Deadline 3 weeks starting august',
    ],
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    files: ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    attachments: [
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
      'y',
    ],
  },
];

const TabsArray = [
  {
    id: '1',
    name: 'Home',
    component: HomeScreen,
    icon: (size: number, color: string) => (
      <EntypoIcon size={size} name={'home'} color={color} />
    ),
  },
  {
    id: '2',
    name: 'Todo',
    component: TodoScreen,
    icon: (size: number, color: string) => (
      <FontAwesomeIcon size={size} name={'calendar'} color={color} />
    ),
  },

  {
    id: '3',
    name: 'Details',
    component: DetailsScreen,
    icon: (size: number, color: string) => (
      <MaterialIcon size={size} name={'event-note'} color={color} />
    ),
  },

  {
    id: '4',
    name: 'Settings',
    component: SettingsScreen,
    icon: (size: number, color: string) => (
      <IonIcon size={size} name={'md-settings-sharp'} color={color} />
    ),
  },
];

export const Person: People = {
  image:
    'https://images.freeimages.com/images/large-previews/4fe/handsome-male-traveler-1637362.jpg',
  name: 'Bamisile Tolulope',
};
export default TabsArray;
