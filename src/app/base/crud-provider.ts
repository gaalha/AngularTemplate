import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Response} from '~models/response';
import {QueryOptions} from '~utils/query-options';
import {ProviderHeaders} from '~app/base/headers';

/**
 * Servicio generico para la creación de CRUDs, la idea es reutilizarlo en todos los CRUDs, para ello las acciones basicas de un CRUD
 * deben tener el mismo endpoint en el API pero con diferente verbos http, así:
 * - POST '/api/user -> create/update
 * - GET '/api/user -> get all
 * - GET '/api/user/:id -> get one
 * - DELETE '/api/user/:id -> delete one
 *
 * Si se respeta esto sólo es necesario pasarle '/api/user' a este servicio cuando se extiende.
 * El servicio agregará el '/:id' en get one y delete.
 */

export class CrudProvider<T> extends ProviderHeaders {

  constructor(
    protected httpClient?: HttpClient,
    protected url?: string,
    protected endpoint?: string,
  ) {
    super();
  }

  /**
   *
   * @param model: contiene el modelo que se va a serializar para ser guardado.
   * @return Observable<Response<T>>
   */
  create(model: T): Observable<Response<T>> {
    // const formBody = this.serializeJSON(model);
    const formBody = this.serializeObject(model);

    return this.httpClient.post<Response<T>>(
        `${this.url}${this.endpoint}`,
        formBody,
        { headers: this.privatePostUrlencodedHeaders }
      );
  }

  /**
   *
   * @param id: Identificador del registro a obtener
   * @return Observable<Response<T>>
   */
  one(id: number): Observable<Response<T>> {
    return this.httpClient.get<Response<T>>(
      `${this.url}${this.endpoint}/${id}`,
      { headers: this.privateHeaders }
    );
  }

  /**
   *
   * @param queryOptions: Si se va a usar serverside es necesario pasar los parametros como QueryOptions.
   * @return Observable<Response<T[]>>
   */
  list(queryOptions?: QueryOptions): Observable<Response<T[]>> {
    const qo = queryOptions?.toQueryString() || '';

    return this.httpClient.get<Response<T[]>>(
      `${this.url}${this.endpoint}?${qo}`,
      { headers: this.privateHeaders }
    );
  }

  /**
   *
   * @param id: Identificador del registro a eliminar.
   * @return Observable<Response<T>>
   */
  delete(id: number): Observable<Response<T>> {
    return this.httpClient.delete<Response<T>>(
      `${this.url}${this.endpoint}/${id}`,
      { headers: this.privateHeaders }
    );
  }

}
