import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMenu } from '../actions/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  public openMenu(): void {
    this.store.dispatch(switchMenu());
  }
}
