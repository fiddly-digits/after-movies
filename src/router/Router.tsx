import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, NotFound } from '../pages';

export function Router() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <MovieList
              path='movie/now_playing'
              title='Home | Now Playing Movies'
            />
          }
        />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route
          path='movies/popular'
          element={<MovieList path='movie/popular' title='Popular Movies' />}
        />
        <Route
          path='movies/top'
          element={<MovieList path='movie/top_rated' title='Top Movies' />}
        />
        <Route
          path='movies/upcoming'
          element={<MovieList path='movie/upcoming' title='Upcoming Movies' />}
        />
        <Route path='search' element={<Search path='search/movie' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
