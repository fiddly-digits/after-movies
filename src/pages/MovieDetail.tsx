import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { MovieData } from '../types/types';
import { useTitle } from '../hooks/useTitle';

export function MovieDetail() {
  const { id } = useParams();
  const { data: movie } = useFetch<MovieData>(`movie/${id}`);
  useTitle(`${movie?.title}` ?? 'Movie Detail');

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    poster_path: posterPath,
    genres,
    title,
    vote_average: average,
    vote_count: count,
    //imdb_id: imdbID,
    //popularity,
    //status,
    //tagline,
    //original_title: originalTitle,
    overview
    //release_date: releaseDate
  } = movie;

  return (
    <main>
      <section className='flex flex-wrap justify-around py-5'>
        <div className='max-w-sm'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
          />
        </div>
        <div className='max-w-2xl text-lg text-gray-700 dark:text-white'>
          <h1 className='my-3 text-4xl font-bold text-center lg:text-left'>
            {title}
          </h1>
          <p className='my-4'>{overview}</p>
          {genres && (
            <p className='flex flex-wrap gap-2 my-7'>
              {genres.map((genre) => (
                <span
                  className='p-2 mr-2 border border-gray-300 rounded shadow-lg dark:border-gray-600 hover:bg-gray-300 hover:text-black'
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          )}
          <div className='flex items-center'>
            <svg
              className='w-4 h-4 text-yellow-300 me-1'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <p className='text-sm font-bold text-gray-900 ms-2 dark:text-white'>
              {average}
            </p>
            <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400' />
            <span className='text-sm font-medium text-gray-900 dark:text-white'>
              {count} reviews
            </span>
            <p className='my-4'>
              <span className='mr-2 font-bold'></span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
