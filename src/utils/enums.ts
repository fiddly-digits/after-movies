export enum PathRoutes {
  Home = '/',
  Popular = 'movies/popular',
  Top = 'movies/top',
  Upcoming = 'movies/upcoming',
  Search = 'search',
  Movie = 'movie/:id'
}

export const APIPathRoutes: { [key: string]: string } = {
  [PathRoutes.Home]: 'movie/now_playing',
  [PathRoutes.Popular]: 'movie/popular',
  [PathRoutes.Top]: 'movie/top_rated',
  [PathRoutes.Upcoming]: 'movie/upcoming',
  [PathRoutes.Search]: 'search/movie'
};

export const GenreName: { [key: number]: string } = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};
