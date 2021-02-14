import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Provider} from '~app/base/provider';
import {User} from '~models/user';
import {Response} from '~models/response';
import {Observable} from 'rxjs';
import {CONSTANTS} from '~utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Provider<User> {

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  delete(id: number): Observable<Response<User>> {
    return undefined;
  }

  getList(sortActive?: string, order?: string, pageSize?: number, page?: number, search?: string): Observable<Response<User[]>> {
    console.log('sortActive', sortActive);
    console.log('order', order);
    console.log('pageSize', pageSize);
    console.log('page', page);
    console.log('search', search);

    return this.http.get<Response<User[]>>(
      `${CONSTANTS.API.HOST}${CONSTANTS.API.USER.LIST}`,
      {headers: this.basePrivateHeaders}
    );
  }

  getOne(id: number): Observable<Response<User>> {
    return undefined;
  }

  save(data: any): Observable<Response<User>> {
    return undefined;
  }

}
