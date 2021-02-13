import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { User } from '~models/user';
import { FormBodyData } from '~utils/form-body-data';
import { CONSTANTS } from '~utils/constants';
import { Response } from '~models/response';
import {ProviderHeaders} from '~app/base/headers';

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends ProviderHeaders{

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  login(user: User) {
    const body = new FormBodyData();
    body.set('email', user.email);
    body.set('password', user.password);
    const API = CONSTANTS.API;

    return this.http.post<Response<User>>(
      `${API.HOST}${API.AUTH.LOGIN}`, body.toString(),
      { headers: this.basePostHeaders}
    );

  }

  logout() {
    // TODO: Implementar esta función en el backend
  }

  getMenuByUserRoles(userId: number) {
    // TODO: Implementar esta función en el backend
  }

}
