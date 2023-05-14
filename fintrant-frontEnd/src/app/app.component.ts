import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetList } from './store/actions/user.actions';
import { State, selectItems } from './store/reducers';
import { UserService } from './user-management/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fintrant-frontEnd';

  public users$: Observable<string[]>;

  constructor(public store: Store<State>, public userService: UserService) {
    this.users$ = store.pipe(select(selectItems));
  }

  public ngOnInit() {
    this.store.dispatch(GetList());
  }
}
