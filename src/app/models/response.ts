/**
 * @author Edgar Mejía
 * fecha: 05/02/2021
 * @description Interfaz generica para parsear las respuestas del servidor.
 */

export interface Response<T> {

  /**
   * Define si la solicitud fue satisfactoria.
   * Nunca es null.
   */
  success: boolean;

  /**
   * Contiene el mensaje del resultado de la solicitud, puede ser mostrado al usuario
   * Puede ser null.
   */
  message: string;

  /**
   * Si la solicitud es para obtener información del servidor.
   * Puede ser null.
   */
  data?: T;

  /**
   * Contiene el token de sesión.
   * Puede ser null.
   */
  token?: string;

  /**
   * Para serverside datatables.
   * Define el total de registros.
   * Puede ser null.
   */
  total?: number;

  /**
   * Para serverside datatables.
   * Define el total de registros por pagina.
   */
  pageSize?: number;

  /**
   * Para serverside datatables.
   * Define la pagina actual.
   */
  page?: number;

}
