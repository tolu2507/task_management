/* eslint-disable prettier/prettier */
import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import OIcon from 'react-native-vector-icons/Octicons';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ENIcon from 'react-native-vector-icons/Entypo';

// MIcon.loadFont();

// type IconSizeProps = {
//   iconSizes: keyof typeof IconSizes;
// };

export interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const MaterialIcons = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={size} color={color} />
);
export const MaterialIcon = ({size, name, color}: IconProps) => (
  <MIcons name={name} size={size} color={color} />
);

export const OctiIcon = ({size, name, color}: IconProps) => (
  <OIcon name={name} size={size} color={color} />
);

export const IonIcon = ({size, name, color}: IconProps) => (
  <IIcon name={name} size={size} color={color} />
);

export const FontAwesomeIcon = ({size, name, color}: IconProps) => (
  <FAIcon name={name} size={size} color={color} />
);

export const EntypoIcon = ({size, name, color}: IconProps) => (
  <ENIcon name={name} size={size} color={color} />
);
