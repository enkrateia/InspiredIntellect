import { createAction, props } from '@ngrx/store';

export const genreFilter = createAction(
  '[Sidebar Component] Genre Filter',
  props<{ genre: string }>()
);

export const resetFilter = createAction(
  '[Sidebar Component] Reset Genre Filter'
);
