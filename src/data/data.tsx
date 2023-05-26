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
  time: string;
  endTime: string;
  endDate: string;
  todos: {todo: string; complete: boolean}[];
  people: People[];
  files: string[];
  attachments: string[];
  started: boolean;
}

export const dataItems: DATAITEMS[] = [
  {
    id: '1',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    time: '12:00',
    endDate: '',
    endTime: '',
    todos: [
      {todo: 'Create a website for job search', complete: true},
      {todo: 'Deadline 3 weeks starting august', complete: false},
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
    started: false,
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

export interface NOTIFICATIONITEMS {
  id: string;
  name: string;
  image: any;
  Title: string;
  description: string;
  date: string;
  people: People[];
  comment: {name: string; comments: string; image: any}[];
}

export const notifications: NOTIFICATIONITEMS[] = [
  {
    id: '1',
    name: 'ADEBAYO',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    comment: [
      {
        name: 'ADEBAYO',
        comments: 'done with this',
        image: require('../../assets/pic4.png'),
      },
      {
        name: 'tolu',
        comments: 'done with this today',
        image: require('../../assets/pic.png'),
      },
    ],
  },
  {
    id: '2',
    name: 'Jude Oyekola',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    comment: [
      {
        name: 'Jude Oyekola',
        comments: 'done with this',
        image: require('../../assets/pic4.png'),
      },
      {
        name: 'tolu',
        comments: 'done with this today',
        image: require('../../assets/pic3.png'),
      },
    ],
  },
  {
    id: '3',
    name: 'Debby pearl',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    comment: [
      {
        name: 'Debby pearl',
        comments: 'done with this',
        image: require('../../assets/pic4.png'),
      },
      {
        name: 'tolu',
        comments: 'done with this today',
        image: require('../../assets/pic3.png'),
      },
    ],
  },
  {
    id: '4',
    name: 'Adekola olaoluwa',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    comment: [
      {
        name: 'Adekola olaoluwa',
        comments: 'done with this',
        image: require('../../assets/pic4.png'),
      },
      {
        name: 'tolu',
        comments: 'done with this today',
        image: require('../../assets/pic3.png'),
      },
    ],
  },
  {
    id: '5',
    name: 'lighter',
    image: require('../../assets/pic4.png'),
    Title: 'creating website Design and Development',
    description:
      'this is the description section it can be as long jgggggggggggggggasd ada d adaddddddddddddad a dg a da d ad a da dgagdadoadad ad gaas i please.',
    date: 'Friday, May 26',
    people: [
      {image: require('../../assets/pic4.png'), margin: 0, name: ''},
      {image: require('../../assets/pic4.png'), margin: 1, name: ''},
      {image: require('../../assets/pic4.png'), margin: 2, name: ''},
      {image: require('../../assets/pic4.png'), margin: 3, name: ''},
      {image: require('../../assets/pic4.png'), margin: 4, name: ''},
    ],
    comment: [
      {
        name: 'lighter',
        comments: 'done with this',
        image: require('../../assets/pic4.png'),
      },
      {
        name: 'tolu',
        comments: 'done with this today',
        image: require('../../assets/pic.png'),
      },
    ],
  },
];
