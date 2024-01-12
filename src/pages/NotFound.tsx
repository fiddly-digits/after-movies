import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import PageNotFound from '../assets/notFound.jpg';

export function NotFound() {
  useTitle('Not Found');
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='my-10 text-4xl font-bold text-gray-700 md:text-7xl dark:text-white'>
            404 Not Found
          </p>
          <div className='max-w-lg'>
            <img src={PageNotFound} alt='404 img' className='rounded' />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link
            to='/'
            className='inline-flex items-center justify-end px-3 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Back to Movies
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
      </section>
    </main>
  );
}
