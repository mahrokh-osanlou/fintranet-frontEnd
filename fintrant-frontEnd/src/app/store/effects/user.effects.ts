import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GetList, GetListSuccess, GetListFail } from '../actions/user.actions'
import { UserService } from 'src/app/user-management/services/user.service';

@Injectable()
export class ItemsEffects {

  public items$ = createEffect(() =>
      this.actions$.pipe(
        ofType(GetList),
        exhaustMap(() =>
          this.userService.getItems().pipe(
            map(items => GetListSuccess(items)),
            catchError(error => of(GetListFail(error)))
          )
        )
      )
    );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
