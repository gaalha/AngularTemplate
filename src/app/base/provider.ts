import { Response } from '~models/response';
import { Observable } from 'rxjs';

export abstract class Provider {

  protected constructor() { }

  public headers: any;

  abstract getList(sortActive: string, order: string, pageSize: number, page: number, search: string): Observable<Response>;

  abstract getOne(id: number): Observable<Response>;

  abstract save(data: any): Observable<Response>;

  abstract delete(id: number): Observable<Response>;

}
