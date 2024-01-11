import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, NotFound } from '../pages';

export function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList api='movie/now_playing' />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route
          path='movies/popular'
          element={<MovieList api='movie/popular' />}
        />
        <Route
          path='movies/top'
          element={<MovieList api='movie/top_rated' />}
        />
        <Route
          path='movies/upcoming'
          element={<MovieList api='movie/upcoming' />}
        />
        <Route path='search' element={<Search api='search/movie' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
