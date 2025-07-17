import { ResponseError } from '@/context/types';
import { GeneralInfo } from '@/dtos/GeneralInfoDTO';
import { handleErrorFeedback } from '@/utils/error';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
});

async function getMovies(value: string) {
  try {
    const response = await api.get<{ Search: GeneralInfo[] } | ResponseError>(
      `?apikey=925eba28&s=${value}`,
    );

    if ('Error' in response.data) {
      const { Error } = response.data;

      handleErrorFeedback(Error);

      return [];
    } else {
      const { Search } = response.data;

      return Search;
    }
  } catch {
    handleErrorFeedback('Houve um erro inesperado!');

    return [];
  }
}

export { getMovies };
