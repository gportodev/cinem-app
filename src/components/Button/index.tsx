import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  style: string;
  children: ReactNode;
};

function Button({ onPress, children, style }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className={style}>
      {children}
    </TouchableOpacity>
  );
}

export { Button };
