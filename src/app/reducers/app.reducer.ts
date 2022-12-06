import { createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

export interface State {
  isMenuOpen: boolean;
}

export const initialState: State = {
  isMenuOpen: false,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.switchMenu, ({ isMenuOpen }) => {
    return { isMenuOpen: !isMenuOpen };
  })
);
