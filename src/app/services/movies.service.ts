import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../movie/Movie';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { movie_mocks } from 'src/mock/movie_mocks';
import { genreFilter, resetFilter } from '../actions/movies.actions';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient, private store: Store) {}

  getMoviesGenres(): string[] {
    const genres = movie_mocks.reduce((prev, current) => {
      return [...prev, ...current.genres];
    }, [] as string[]);
    return [...new Set(genres)];
  }

  getMoviesByGenre(genre: string): void {
    this.store.dispatch(genreFilter({ genre }));
  }

  resetFilter(): void {
    this.store.dispatch(resetFilter());
  }
}
