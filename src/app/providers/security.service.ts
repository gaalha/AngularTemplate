import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '~models/user';
import { FormBodyData } from '~utils/form-body-data';
import { CONSTANTS } from '~utils/constants';
import { Response } from '~models/response';
import {ProviderHeaders} from '~app/base/headers';
import {Menu} from '~models/menu';

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends ProviderHeaders {

  private readonly API = CONSTANTS.API;

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  login(user: User) {
    const body = new FormBodyData();
    body.set('email', user.email);
    body.set('password', user.password);

    return this.http.post<Response<User>>(
      `${this.API.HOST}${this.API.SECURITY.LOGIN}`, body.toString(),
      { headers: this.basePostHeaders}
    );

  }

  logout() {
    // TODO: Implementar esta función en el backend
  }

  getMenuByUserRoles(userId: number) {
    // TODO: Implementar esta función en el backend

    return this.http.get<Response<Menu[]>>(
      `${this.API.HOST}${this.API.SECURITY.MENU}`,
      { headers: this.basePrivateHeaders}
    );
  }

}
