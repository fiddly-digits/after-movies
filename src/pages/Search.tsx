import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components';
import { Movie } from '../types/types';
import { useTitle } from '../hooks/useTitle';

type props = {
  path: string;
};

export function Search({ path }: props) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch<Movie[]>(path, 1, queryTerm || '');
  useTitle(`Search`);

  return (
    <main>
      <section className='py-2 mx-auto max-w-7xl'>
        <p className='mx-4 text-3xl text-gray-700 dark:text-white text-nowrap'>
          {movies?.length === 0
            ? `No result found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap justify-center'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
