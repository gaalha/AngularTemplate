import { Response } from '~models/response';
import { Observable } from 'rxjs';

export abstract class Provider<T> {

  protected constructor() { }

  public headers: any;

  abstract getList(sortActive: string, order: string, pageSize: number, page: number, search: string): Observable<Response<T>>;

  abstract getOne(id: number): Observable<Response<T>>;

  abstract save(data: any): Observable<Response<T>>;

  abstract delete(id: number): Observable<Response<T>>;

}