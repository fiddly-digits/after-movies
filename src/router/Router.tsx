import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, NotFound } from '../pages';

export function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList api='now_playing' />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='movies/popular' element={<MovieList api='popular' />} />
        <Route path='movies/top' element={<MovieList api='top_rated' />} />
        <Route path='movies/upcoming' element={<MovieList api='upcoming' />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
