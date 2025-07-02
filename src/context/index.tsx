import React, { createContext, useState, useContext, JSX } from 'react';
import { MovieProps, MovieListContext } from './types';
import { GeneralInfo } from '@/dtos/GeneralInfoDTO';

const defaultValue: MovieListContext = {
  movies: [],
  setMovies: () => {},
  favorites: [],
  setFavorites: () => {},
};

const MovieContext = createContext(defaultValue);

function MovieProvider({ children }: MovieProps): JSX.Element {
  const [movies, setMovies] = useState<GeneralInfo[]>([]);
  const [favorites, setFavorites] = useState<GeneralInfo[]>([]);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, favorites, setFavorites }}
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
