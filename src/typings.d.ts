/**
 * @author Edgar Mejía
 * Fecha: 05/02/2021
 *
 * Este archivo sirve como modelo para poder importar archivos .json como modulos.
 *
 */

declare module '*.json' {
  const value: any;
  export default value;
}
