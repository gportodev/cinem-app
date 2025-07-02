import { GeneralInfo } from '@/dtos/GeneralInfoDTO';
import { ReactNode } from 'react';

type MovieProps = {
  children: ReactNode;
};

type MovieListContext = {
  movies: GeneralInfo[] | [];
  setMovies: React.Dispatch<React.SetStateAction<GeneralInfo[]>>;
  favorites: GeneralInfo[] | [];
  setFavorites: React.Dispatch<React.SetStateAction<GeneralInfo[]>>;
};

export { MovieProps, MovieListContext };
