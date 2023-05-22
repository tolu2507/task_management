/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable} from 'react-native';

export default function ButtonComponent({
  children,
  style,
  onPress,
}: {
  children: any;
  style: {};
  onPress: () => void;
}) {
  return (
    <Pressable style={({pressed}) => pressed && style} onPress={onPress}>
      {children}
    </Pressable>
  );
}
