import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, SearchList, NotFound } from '../pages';
import { PathRoutes, APIPathRoutes } from '../utils/pathRoutes';

export function Router() {
  const { Home, Popular, Top, Upcoming, Search, Movie, Wildcard } = PathRoutes;

  return (
    <>
      <Routes>
        <Route
          path={Home}
          element={
            <MovieList
              path={APIPathRoutes[Home]}
              title='Home | Now Playing Movies'
            />
          }
        />
        <Route path={Movie} element={<MovieDetail />} />
        <Route
          path={Popular}
          element={
            <MovieList path={APIPathRoutes[Popular]} title='Popular Movies' />
          }
        />
        <Route
          path={Top}
          element={<MovieList path={APIPathRoutes[Top]} title='Top Movies' />}
        />
        <Route
          path={Upcoming}
          element={
            <MovieList path={APIPathRoutes[Upcoming]} title='Upcoming Movies' />
          }
        />
        <Route
          path={Search}
          element={<SearchList path={APIPathRoutes[Search]} />}
        />
        <Route path={Wildcard} element={<NotFound />} />
      </Routes>
    </>
  );
}
