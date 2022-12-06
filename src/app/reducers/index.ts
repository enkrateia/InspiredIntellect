import { appReducer } from './app.reducer';
import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { moviesReducer } from './movies.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  movies: moviesReducer,
  app: appReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
