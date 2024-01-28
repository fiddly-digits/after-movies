import { Link } from 'react-router-dom';
import { Movie } from '../types/types';
import dayjs from 'dayjs';
import defaultBackdrop from '../assets/default.jpg';
import { GenreName } from '../utils/enums';

type props = {
  movie: Movie;
};

export function MovieCard({ movie }: props) {
  const {
    id,
    backdrop_path: backdropPath,
    title,
    original_title: originalTitle,
    release_date: releaseDate,
    genre_ids: genreIDS
  } = movie;
  return (
    <Link to={`/movie/${id}`}>
      <div className='flex flex-col max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow dark:shadow-gray-700 dark:bg-gray-800 dark:border-gray-700'>
        <div className='mx-3 mt-3 overflow-hidden rounded-lg max-h-48'>
          <img
            className='rounded-lg w-fill hover:scale-110'
            src={
              backdropPath
                ? `https://image.tmdb.org/t/p/w500/${backdropPath}`
                : defaultBackdrop
            }
            alt=''
          />
        </div>
        <div className='flex flex-col items-baseline justify-between p-3 grow'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-800 dark:hover:text-blue-600'>
            {title}
          </h5>
          <p className='text-sm font-medium tracking-tight text-gray-400 dark:text-gray-600'>
            {originalTitle}
          </p>
          <p className='mb-2 text-sm font-medium tracking-tight text-gray-400 dark:text-gray-600'>
            {dayjs(releaseDate).format('MMMM D, YYYY')}
          </p>
          {genreIDS && (
            <p className='flex flex-wrap gap-2 mb-3'>
              {genreIDS
                .filter((_genreID, index) => index < 4)
                .map((genreID) => (
                  <span
                    className='p-2 border border-gray-300 rounded shadow-lg dark:border-gray-600 dark:text-white hover:bg-gray-300 dark:hover:text-black'
                    key={GenreName[genreID]}
                  >
                    {GenreName[genreID]}
                  </span>
                ))}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
