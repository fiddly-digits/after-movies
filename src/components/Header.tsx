import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/morningafter.png';
import { useEffect, useState } from 'react';
import { cn } from '../utils/themeMerge';

export function Header() {
  const [searchHidden, setSearchHidden] = useState(true);
  const [menuHidden, setMenuHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode') || 'false')
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryTerm = event.currentTarget.search.value;
    event.currentTarget.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header>
      <nav className='bg-white border-gray-200 shadow-lg dark:bg-gray-900'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto md:flex-nowrap'>
          {/* // ! { Flex no wrap para que no colapse la búsqueda y el theme} */}
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src={logo}
              className='h-8 rounded-full'
              alt='Morningafter logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              AfterMovies
            </span>
          </Link>
          <div className='flex md:order-2'>
            <button
              onClick={() => setDarkMode(!darkMode)}
              id='theme-toggle'
              type='button'
              className='text-gray-500 me-1 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
            >
              <svg
                id='theme-toggle-dark-icon'
                className={cn('w-5 h-5 ', { hidden: darkMode })}
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
              <svg
                id='theme-toggle-light-icon'
                className={cn('w-5 h-5 ', { hidden: !darkMode })}
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  fillRule='evenodd'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              onClick={() => setSearchHidden(!searchHidden)}
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='search'
                  id='search-navbar'
                  className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search...'
                  autoComplete='off'
                />
              </form>
            </div>
            <button
              onClick={() => setMenuHidden(!menuHidden)}
              data-collapse-toggle='navbar-search'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-search'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className={cn(
              'items-center justify-between w-full md:hidden md:w-auto md:order-1',
              { hidden: searchHidden }
            )}
          >
            <div className='relative mt-3'>
              <div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='search'
                  id='search-navbar'
                  className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search...'
                  autoComplete='off'
                />
              </form>
            </div>
          </div>
          <div
            className={cn(
              'items-center justify-between w-full md:flex md:w-auto md:order-1',
              { hidden: menuHidden }
            )}
            id='navbar-search'
          >
            <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    cn({ active: isActive, inactive: !isActive })
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/popular'
                  className={({ isActive }) =>
                    cn({ active: isActive, inactive: !isActive })
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/top'
                  className={({ isActive }) =>
                    cn({ active: isActive, inactive: !isActive })
                  }
                >
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies/upcoming'
                  className={({ isActive }) =>
                    cn({ active: isActive, inactive: !isActive })
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
