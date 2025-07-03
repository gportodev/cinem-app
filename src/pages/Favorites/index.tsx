import React, { JSX } from 'react';

import { useMovie } from '@/context';
import { FlatList, View } from 'react-native';

function Favorites(): JSX.Element {
  const { favorites, setFavorites } = useMovie();
  const { movies, setMovies } = useMovie();

  function removeFavoriteMovie(item) {
    const filterMovie = favorites.filter(m => m.imdbID !== item.imdbID);

    setFavorites(filterMovie);

    const updateMovies = movies.map(m => {
      return m.imdbID === item.imdbID ? { ...m, favorite: false } : m;
    });

    setMovies(updateMovies);
  }

  const renderItem = ({ item }) => {
    return <View></View>;
  };

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.imdbID}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  );
}

export { Favorites };
