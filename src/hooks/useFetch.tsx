import { useEffect, useState } from 'react';
import { Movie, MovieData } from '../types/types';
const { VITE_TMDB_API_KEY } = import.meta.env;

export const useFetch = <T extends Movie[] | MovieData>(
  path: string,
  page?: number,
  queryTerm?: string
) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${path}?api_key=${VITE_TMDB_API_KEY}&language=en-US&page=${
          page ?? 1
        }&query=${queryTerm}`
      );
      const json = await response.json();
      json.results ? setData(json.results) : setData(json);
    }
    fetchData();
  }, [path, page, queryTerm]);

  return { data };
};
