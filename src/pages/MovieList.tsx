import { useFetch } from '../hooks/useFetch';
import { MovieCard } from '../components';
import { Movie } from '../types/types';
import { useTitle } from '../hooks/useTitle';

//! Add Pagination

type props = {
  path: string;
  title: string;
};

export function MovieList({ path, title }: props) {
  const { data: movies } = useFetch<Movie[]>(path);
  useTitle(title);

  return (
    <main>
      <section className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap justify-center other:justify-evenly'>
          {movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
