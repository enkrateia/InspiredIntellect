import { Component } from '@angular/core';
import { movie_mocks } from 'src/mock/movie_mocks';
import { Store } from '@ngrx/store';
import Movie from './movie/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  movies$: Observable<Movie[]>;

  constructor(private store: Store<{ movies: Movie[] }>) {
    this.movies$ = store.select('movies');
  }
}
