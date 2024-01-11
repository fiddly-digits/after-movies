import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { MovieCard } from '../components';

type props = {
  api: string;
};

export function Search({ api }: props) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(api, 1, queryTerm || '');

  return (
    <main>
      <section className='py-2 mx-auto max-w-7xl'>
        <p className='mx-4 text-3xl text-gray-700  dark:text-white text-nowrap'>
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap justify-center'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
