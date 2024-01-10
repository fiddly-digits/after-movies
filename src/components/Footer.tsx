import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='mt-4 bg-white rounded-lg shadow dark:bg-gray-800'>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link to='/' className='hover:underline'>
            MorningAfter
          </Link>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a
              href='#'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='#'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              LinkedIN
            </a>
          </li>
          <li>
            <a href='#' target='_blank' className='hover:underline'>
              Last.fm
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
