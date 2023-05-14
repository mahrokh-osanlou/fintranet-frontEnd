import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { State as UserState, reducer } from '../reducers/user.reducers';

export interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: reducer,
};

export const selectItems = createSelector(
  createFeatureSelector('user'),
  (state: UserState) => state.users
);
