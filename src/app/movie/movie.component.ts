import { Component, Input } from '@angular/core';
import Movie from './Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass'],
})
export class MovieComponent {
  @Input() movie: Movie | undefined = undefined;
  public isShowed: boolean = false;

  public showDetails(movie: Movie) {
    this.isShowed = !this.isShowed;
  }
}
