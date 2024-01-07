import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, NotFound } from '../pages';

export function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='movies/popular' element={<MovieList />} />
        <Route path='movies/top' element={<MovieList />} />
        <Route path='movies/upcoming' element={<MovieList />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      ;
    </>
  );
}
