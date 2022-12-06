export default interface Movie {
  _id: string;
  tomatoes: Tomatoes;
  genres: string[];
  cast: string[];
  languages: string[];
  directors: string[];
  countries: string[];
  plot: string;
  runtime: number;
  poster: string;
  title: string;
  lastUpdated: string;
  year: number;
  imdb: IMDB;
  type: string;
  awards: Awards[];
  fullplot?: string;
  writers?: string[];
  released?: string;
  num_mflix_comments?: number;
  rated?: string;
}

interface Tomatoes {
  viewer: Viewer;
  lastUpdated: string;
  dvd?: string;
  production?: string;
  website?: string;
  critic?: Viewer;
  fresh?: number;
  rotten?: number;
  consensus?: string;
  boxOffice?: string;
}

interface Viewer {
  rating: number;
  numReviews: number;
  meter?: number;
}

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface IMDB {
  rating: number;
  votes: number;
  id: number;
}
