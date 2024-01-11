import { MovieCard } from '../components';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/types';

type props = {
  api: string;
};

export function MovieList({ api }: props) {
  const { data: movies } = useFetch<Movie[]>(api);

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
