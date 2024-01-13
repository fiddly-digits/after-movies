import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { MovieCard } from '../components';
import { Movie } from '../types/types';
import { useTitle } from '../hooks/useTitle';
import { cn } from '../utils/themeMerge';

//! Fix state saving the number on page change
//! Check how to pass the page between renders

type props = {
  path: string;
  title: string;
};

export function MovieList({ path, title }: props) {
  const [page, setPage] = useState(1);
  const { data: movies, totalPages } = useFetch<Movie[]>(path, page);
  useTitle(title);

  return (
    <main>
      <section className='mx-auto max-w-7xl py-7'>
        <div className='flex flex-wrap other:justify-evenly'>
          {movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className='flex justify-center'>
          {/* Previous Button */}
          <button
            className={cn(
              'flex items-center justify-center h-10 px-4 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg me-3 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              { hidden: page === 1 }
            )}
            onClick={() => (page !== 1 ? setPage(page - 1) : setPage(page))}
          >
            <svg
              className='w-3.5 h-3.5 me-2 rtl:rotate-180'
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
                d='M13 5H1m0 0 4 4M1 5l4-4'
              />
            </svg>
            Previous
          </button>
          <span className='flex items-center justify-center h-10 px-4 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg me-4 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            {page}
          </span>
          <button
            className={cn(
              'flex items-center justify-center h-10 px-4 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              { hidden: page === totalPages }
            )}
            onClick={() =>
              page !== totalPages ? setPage(page + 1) : setPage(1)
            }
          >
            Next
            <svg
              className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
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
          </button>
        </div>
      </section>
    </main>
  );
}
