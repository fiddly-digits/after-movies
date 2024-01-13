export enum PathRoutes {
  Home = '/',
  Popular = 'movies/popular',
  Top = 'movies/top',
  Upcoming = 'movies/upcoming',
  Search = 'search',
  Movie = 'movie/:id',
  Wildcard = '*'
}

export const APIPathRoutes: { [key: string]: string } = {
  [PathRoutes.Home]: 'movie/now_playing',
  [PathRoutes.Popular]: 'movie/popular',
  [PathRoutes.Top]: 'movie/top_rated',
  [PathRoutes.Upcoming]: 'movie/upcoming',
  [PathRoutes.Search]: 'search/movie'
};
