import { CustomGeneralInfo } from '@/dtos/CustomGeneralInfoDTO';
import { ReactNode } from 'react';

type MovieProps = {
  children: ReactNode;
};

type MovieListContext = {
  movies: CustomGeneralInfo[] | [];
  setMovies: React.Dispatch<React.SetStateAction<CustomGeneralInfo[]>>;
  favorites: CustomGeneralInfo[] | [];
  setFavorites: React.Dispatch<React.SetStateAction<CustomGeneralInfo[]>>;
  favoriteMovie: (item: CustomGeneralInfo) => void;
};

type ResponseError = {
  Response: string;
  Error: string;
};

export { MovieProps, MovieListContext, ResponseError };
