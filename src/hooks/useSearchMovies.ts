import { getMovies } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

type Props = {
  wantedMovie: string;
};

export function useSearchMovies({ wantedMovie }: Props) {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['search-movies', wantedMovie],
    queryFn: () => getMovies(wantedMovie),
    enabled: false,
  });

  return {
    data,
    isLoading,
    isFetching,
    refetch,
  };
}
