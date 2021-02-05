/**
 * @author Edgar Mejía
 * Fecha: 05/02/2021
 *
 * Adaptado de:
 * - https://itnext.io/how-to-add-git-hash-into-your-angular-application-bec20b702bb1
 *
 * Tambien se usa las indicaciones de esta respuesta para compilar el archivo js del root correctamente:
 * - https://stackoverflow.com/questions/42155115/how-to-include-git-revision-into-angular-cli-application#51154524
 */

const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');
const path = require('path');

const info = gitDescribeSync();
const infoJson = JSON.stringify(info, null, 2);

writeFileSync(path.join(__dirname, '/src/git-version.json'), infoJson);
