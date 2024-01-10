import { MovieCard } from '../components';
import useFetch from '../hooks/useFetch';
// ! clases para volver grid grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-10 md:grid-cols-3 md:grid-rows-6

type props = {
  api: string;
};

export function MovieList({ api }: props) {
  const { data: movies } = useFetch(api);

  return (
    <main>
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
