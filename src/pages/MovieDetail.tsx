import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { MovieData } from '../types/types';
import { useTitle } from '../hooks/useTitle';
import imdb from '../assets/imdb.png';
import dayjs from 'dayjs';

// ! Add a Return Button

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
    imdb_id: imdbID,
    tagline,
    original_title: originalTitle,
    overview,
    release_date: releaseDate
  } = movie;

  return (
    <main>
      <section className='flex flex-wrap justify-around py-5'>
        <div className='max-w-sm'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className='rounded-lg'
          />
        </div>
        <div className='max-w-2xl text-lg text-gray-700 dark:text-white'>
          <h1 className='mt-3 text-4xl font-bold text-center lg:text-left'>
            {title}
          </h1>
          <h2 className='mb-3 text-2xl text-center text-gray-600 lg:text-left'>
            {tagline}
          </h2>

          <p className='my-2 text-xl'>
            <span className='font-bold'>Original Title: </span>
            {originalTitle}
          </p>
          <p className='my-2 text-xl'>
            <span className='font-bold'>Release Date: </span>
            {dayjs(releaseDate).format('MMMM D, YYYY')}
          </p>

          <p className='my-4'>{overview}</p>
          <p className='my-4 font-bold'>Genres:</p>
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
          <div className='flex items-center my-4'>
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
          </div>
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            className='flex items-center my-4'
          >
            <span className='mr-2 font-bold'>More Info </span>
            <img src={imdb} alt='imdb logo' className='w-16 ' />
          </a>
        </div>
      </section>
    </main>
  );
}
