import { MovieCard } from '../components';

export function MovieList() {
  return (
    <main>
      <section className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap justify-start'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </main>
  );
}
