import { useEffect, useState } from 'react';
import { Movie } from '../types/types';
const { VITE_TMDB_API_KEY } = import.meta.env;

const useFetch = (path: string, page?: number, queryTerm?: string) => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${path}?api_key=${VITE_TMDB_API_KEY}&language=en-US&page=${
          page ?? 1
        }&query=${queryTerm}`
      );
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [path, page, queryTerm]);
  return { data };
};

export default useFetch;
