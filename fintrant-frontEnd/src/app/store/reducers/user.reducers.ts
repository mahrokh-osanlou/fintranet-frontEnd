import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/user.actions';

export interface State {
  users: string[];
}

export const initialState: State = {
  users: [],
};

const cartReducer = createReducer(
  initialState,
  on(Actions.GetListSuccess, (state, action) => ({
    ...state,
    items: [...action.payload],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
