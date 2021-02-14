import {HttpHeaders} from '@angular/common/http';

export abstract class ProviderHeaders {

  protected constructor() {
  }

  protected basePostHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  protected basePrivateHeaders = new HttpHeaders({
    // Authorization: 'JWT ' + localStorage.getItem('token')
    'secret-key': localStorage.getItem('token')
  });

}
