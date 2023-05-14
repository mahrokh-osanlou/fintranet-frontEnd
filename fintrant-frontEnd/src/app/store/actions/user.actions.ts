import { createAction } from '@ngrx/store';

export const GetList = createAction('[User] User List');

export const GetListSuccess = createAction(
  '[User] User List Success',
  (payload: string[]) => ({ payload })
);

export const GetListFail = createAction(
  '[User] User List Fail',
  (payload: string) => ({ payload })
);
