/**
 * @author Edgar Mejía
 * fecha: 05/02/2021
 *
 * Algunas constantes son requeridas, se debe evitar remover su definición, de ser necesario
 * dejar vacia o null.
 *
 */

export const CONSTANTS = {

  /**
   * Requerida no eliminar, dejar vacia o null.
   * Se usa en el sidenav-component y en el footer-component
   */
  APP_NAME: 'AngularTemplate',

  /**
   * Requerida no eliminar, dejar vacia o null
   * Se usa en el footer-component
   */
  VENDOR_NAME: 'Creativa Consultores',

  /**
   * Requerida no eliminar, dejar vacia o null
   * Se usa en el footer-component
   */
  VENDOR_URL: 'https://creativaconsultores.com/',

  API: {

    // HOST: 'localhost:4200',

    HOST: 'https://api.jsonbin.io',

    SECURITY: {

      LOGIN: '/login',

      LOGOUT: '/logout',

      MENU: '/b/602982c56b568373f8c19dc7',

    },

    USER: {

      // LIST: '/list',

      LIST: '/b/60287057435c323ba1c5f4bd/1',

      GET: '/get/:id',

      SAVE: '/save',

      DELETE: '/delete/:id',

    },

  }

};
