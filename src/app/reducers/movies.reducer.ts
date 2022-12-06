import { createReducer, on } from '@ngrx/store';
import { movie_mocks } from 'src/mock/movie_mocks';
import * as MoviesActions from '../actions/movies.actions';
import Movie from '../movie/Movie';

export const initialState: Movie[] = movie_mocks;

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.genreFilter, (_state, { genre }) => {
    return initialState.filter((movie) => movie.genres.includes(genre));
  }),
  on(MoviesActions.resetFilter, (_state) => initialState)
);
