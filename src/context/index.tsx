import React, {
  createContext,
  useState,
  useContext,
  JSX,
  useCallback,
  useEffect,
} from 'react';
import { MovieProps, MovieListContext } from './types';
import { CustomGeneralInfo } from '@/dtos/CustomGeneralInfoDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleErrorFeedback } from '@/utils/error';
import { handleSuccessFeedback } from '@/utils/success';

const defaultValue: MovieListContext = {
  movies: [],
  setMovies: () => {},
  favorites: [],
  setFavorites: () => {},
  favoriteMovie: () => {},
};

const MovieContext = createContext(defaultValue);
const keyStorage = '@favorites';

function MovieProvider({ children }: MovieProps): JSX.Element {
  const [movies, setMovies] = useState<CustomGeneralInfo[]>([]);
  const [favorites, setFavorites] = useState<CustomGeneralInfo[]>([]);

  const favoriteMovie = useCallback(
    async (item: CustomGeneralInfo) => {
      try {
        const updatedMoviesList = movies.map(movie => {
          if (movie.imdbID === item.imdbID) {
            const newItem: CustomGeneralInfo = {
              ...movie,
              favorite: !item.favorite,
            };
            return newItem;
          }
          return movie;
        });

        const findMovie = favorites.find(movie => movie.imdbID === item.imdbID);

        if (findMovie) {
          const newFavoriteList = favorites.filter(
            movie => movie.imdbID !== item.imdbID,
          );

          const jsonValue = JSON.stringify(newFavoriteList);
          await AsyncStorage.setItem(keyStorage, jsonValue);

          setMovies(updatedMoviesList);
          setFavorites(newFavoriteList);
          handleSuccessFeedback('Removido dos favoritos.', 'default');
        } else {
          const newList = [...favorites];
          newList.push({ ...item, favorite: true });

          const jsonValue = JSON.stringify(newList);

          await AsyncStorage.setItem(keyStorage, jsonValue);

          setMovies(updatedMoviesList);
          setFavorites(newList);
          handleSuccessFeedback('Adicionado aos favoritos!', 'success');
        }
      } catch {
        handleErrorFeedback('Não foi possível salvar a nova lista!');
      }
    },
    [favorites, movies],
  );

  const getStoredMovies = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(keyStorage);

      if (!jsonValue) return;

      const parsedValue = JSON.parse(jsonValue);

      setFavorites(parsedValue);
    } catch {
      handleErrorFeedback('Não foi possível buscar a lista de favoritos!');
    }
  }, []);

  useEffect(() => {
    getStoredMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        setFavorites,
        favoriteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);

  return context;
}

export { MovieProvider, useMovie };
