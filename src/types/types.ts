export type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: [number];
};

export type MovieData = {
  genres: [Genre];
  imdb_id: string;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  status: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
};

export type Genre = {
  id: number;
  name: string;
};
