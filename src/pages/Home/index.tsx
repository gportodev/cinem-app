import React, { JSX } from 'react';

import { Alert, View } from 'react-native';
import api from '../../services/api';

import { Header } from '../../components/Header';

import { useMovie } from '@/context';
import { List } from '@/components/List';

function Home(): JSX.Element {
  const { movies, setMovies } = useMovie();

  async function searchMovie(movie: string) {
    if (movie === undefined) {
      Alert.alert('Insira o nome do filme!');
    } else {
      const response = await api.get(`?apikey=925eba28&s=${movie}`);

      const { Search } = response.data;

      if (!Search) {
        Alert.alert('Filme não existe!');
      } else {
        setMovies(Search);
      }
    }
  }

  // function addFavoriteMovie(item) {
  //     const mo = movies.map((m) => {
  //         return m.imdbID === item.imdbID ? { ...m, favorite: true } : m;
  //     });

  //     setMovies(mo);

  //     if (favorites) {
  //         const itemMovie = favorites.find((m) => m.imdbID === item.imdbID);

  //         if (!itemMovie) {
  //             setFavorites((state) => [...state, item]);
  //         } else {
  //             Alert.alert('Você já adicionou esse filme!');
  //         }
  //     } else {
  //         setFavorites([item]);
  //     }
  // }

  return (
    <View className="flex-1 bg-obsidian">
      <Header searchMovie={searchMovie} />

      <List list={movies} />
    </View>
  );
}

export { Home };
