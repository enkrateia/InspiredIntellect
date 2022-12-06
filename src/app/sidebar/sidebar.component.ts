import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State as AppState } from '../reducers/app.reducer';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  public isMenuOpen$: Observable<boolean>;
  public genres: string[] = [];

  constructor(
    private moviesService: MoviesService,
    private store: Store<{ app: AppState }>
  ) {
    this.genres = this.moviesService.getMoviesGenres();
    this.isMenuOpen$ = store.select('app', 'isMenuOpen');
  }

  public handleGenreFilter(genre: string): void {
    this.moviesService.getMoviesByGenre(genre);
  }

  public handleResetFilter(): void {
    this.moviesService.resetFilter();
  }
}
