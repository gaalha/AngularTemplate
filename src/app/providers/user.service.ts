import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {User} from '~models/user';
import {CONSTANTS} from '~utils/constants';
import {CrudProvider} from '~app/base/crud-provider';
import {Response} from '~models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudProvider<User> {

  constructor(
    httpClient: HttpClient
  ) {
    super(
      httpClient,
      CONSTANTS.API.HOST,
      '/b/60287057435c323ba1c5f4bd/1',
    );
  }

  public disable(data: any): Observable<Response<User>> {
    return this.httpClient.post<Response<User>>(
      `${this.url}${this.endpoint}/disable`,
      data,
      { headers: this.publicPostUrlencodedHeaders }
    );
  }

}
