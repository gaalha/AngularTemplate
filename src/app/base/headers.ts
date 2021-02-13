import {HttpHeaders} from '@angular/common/http';

export abstract class ProviderHeaders {

  protected constructor() {
  }

  protected basePostHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

}
