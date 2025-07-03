import React, { JSX, useState } from 'react';
import { View } from 'react-native';
import { Search } from '../Search';

type HeaderProps = {
  searchMovie: (value: string) => void;
};

function Header({ searchMovie }: HeaderProps): JSX.Element {
  const [value, setValue] = useState('');

  return (
    <View className="pt-24 pr-16 pl-16">
      <Search value={value} setValue={setValue} onPress={searchMovie} />
    </View>
  );
}

export { Header };
