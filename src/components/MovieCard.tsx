import { Link } from 'react-router-dom';
import { Movie } from '../types/types';
import defaultBackdrop from '../assets/default.jpg';
import dayjs from 'dayjs';

type props = {
  movie: Movie;
};

export function MovieCard({ movie }: props) {
  const {
    id,
    backdrop_path: backdropPath,
    title,
    original_title: originalTitle,
    overview,
    release_date: releaseDate
  } = movie;
  return (
    <div className='max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link to='#'>
        <img
          className='rounded-t-lg max-h-52 w-fit'
          src={
            backdropPath
              ? `https://image.tmdb.org/t/p/w500/${backdropPath}`
              : defaultBackdrop
          }
          alt=''
        />
      </Link>
      <div className='p-5 '>
        <Link to='#'>
          <h5 className='mb-2 overflow-scroll text-2xl font-bold tracking-tight text-gray-900 no-scrollbar whitespace-nowrap dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-2 overflow-scroll text-sm font-medium tracking-tight text-gray-400 dark:text-gray-600 whitespace-nowrap no-scrollbar'>
          {originalTitle}
        </p>
        <p className='mb-2 text-sm font-medium tracking-tight text-gray-400 dark:text-gray-600'>
          {dayjs(releaseDate).format('MMMM D, YYYY')}
        </p>
        <p className='mb-3 overflow-scroll font-normal text-gray-700 h-36 no-scrollbar dark:text-gray-400'>
          {overview}
        </p>
        <Link
          to={`/movie/${id}`}
          className='inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
