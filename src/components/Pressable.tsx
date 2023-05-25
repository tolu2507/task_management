/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable} from 'react-native';

export default function ButtonComponent({
  children,
  style,
  onPress,
  disabled,
}: {
  children: any;
  style: {};
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      disabled={disabled ? disabled : false}
      style={({pressed}) => pressed && style}
      onPress={onPress}
      android_ripple={{color: 'white'}}>
      {children}
    </Pressable>
  );
}
