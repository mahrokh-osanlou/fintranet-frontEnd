import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as model from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {
  data = [];
  url = 'https://dummyjson.com';
  constructor(private http: HttpClient) {}
  getUserList(): Observable<model.User[]> {
    return this.http.get(this.url + '/users').pipe(
      map((rep) => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.User[]>rep;
        }
      })
    );
  }

  public getItems() {
    return of(this.data).pipe(delay(2000));
  }
}
