import React, { JSX, useCallback, useState } from 'react';

import { SafeAreaView } from 'react-native';

import { useMovie } from '@/context';
import { List } from '@/components/List';
import { style } from './style';
import { CustomGeneralInfo } from '@/dtos/CustomGeneralInfoDTO';
import { useSearchMovies } from '@/hooks/useSearchMovies';

function Home(): JSX.Element {
  const [wantedMovie, setWantedMovie] = useState('');

  const { movies, setMovies, favorites } = useMovie();

  const { isFetching, refetch } = useSearchMovies({
    wantedMovie,
  });

  const searchMovie = useCallback(() => {
    refetch().then(response => {
      const newList: CustomGeneralInfo[] =
        response.data && response?.data?.length > 0
          ? response.data.map(item => {
              const findMovie = favorites.find(
                movie => movie.imdbID === item.imdbID,
              );

              if (findMovie) {
                return { ...item, favorite: true };
              }

              return { ...item, favorite: false };
            })
          : [];

      setMovies(newList);
    });
  }, [favorites, refetch, setMovies]);

  return (
    <SafeAreaView className={style.container}>
      <List
        list={movies}
        value={wantedMovie}
        setValue={setWantedMovie}
        onPress={searchMovie}
        loading={isFetching}
      />
    </SafeAreaView>
  );
}

export { Home };
