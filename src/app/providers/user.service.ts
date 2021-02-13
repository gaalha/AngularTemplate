import { Injectable } from '@angular/core';

import {Provider} from '~app/base/provider';
import {User} from '~models/user';
import {Response} from '~models/response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Provider<User>{

  constructor() {
    super();
  }

  delete(id: number): Observable<Response<User>> {
    return undefined;
  }

  getList(sortActive: string, order: string, pageSize: number, page: number, search: string): Observable<Response<User>> {
    return undefined;
  }

  getOne(id: number): Observable<Response<User>> {
    return undefined;
  }

  save(data: any): Observable<Response<User>> {
    return undefined;
  }

}
