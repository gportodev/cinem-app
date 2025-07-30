import React, { JSX, useMemo, useState } from 'react';

import { useMovie } from '@/context';
import { SafeAreaView } from 'react-native';
import { style } from './styles';

import { List } from '@/components/List';

function Favorites(): JSX.Element {
  const { favorites } = useMovie();
  const [value, setValue] = useState('');

  const filteredFavorites = useMemo(() => {
    if (!favorites) return [];

    const result = favorites.filter(favorite => {
      const matchesSearch =
        favorite.Title.toLowerCase().includes(value.toLowerCase()) ||
        favorite.Year.includes(value);

      return matchesSearch;
    });

    return result;
  }, [favorites, value]);

  return (
    <SafeAreaView className={style.container}>
      <List list={filteredFavorites} value={value} setValue={setValue} filter />
    </SafeAreaView>
  );
}

export { Favorites };
