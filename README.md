# AngularTemplate
TODO: Agregar descripción

## Aplicaciones necesarias para el desarrolo de la app:

| **Nombre** | **Página** |
| ------ | ------ |
| NodeJS (NPM) | [Web de descarga](https://nodejs.org/es/) |
| Angular CLI | [Web de descarga](https://cli.angular.io/) |

Todas son indispensables para el desarrollo.

## Descargar proyecto e instalar sus dependencias
Haciendo uso de Git:

```
$ git clone https://github.com/edgarMejia/AngularTemplate.git
$ cd AngularTemplate
$ npm i
```


## Como correr la aplicacón
Para correr la app en modo dev:

| **Acción** | **Comando** |
| ------ | ------ |
| Correr en modo dev | `ng serve` |

## Pipes usados en este proyecto

| **Nombre** | **Descripción** |
| ------ | ------ |
| money | Si el valor tiene más de dos decimales lo trunca a 2, si no tiene decimales le agrega '.00', si recibe null devuelve '00.00' |

## Plugins isntalados:

| **Nombre** | **Descripción** | **Repositorio** |
| ------ | ------ | ------ |
| ngx-translate | Para la internacionalización de textos | [GitHub](https://github.com/ngx-translate/core) |
| moment | Para la manipulación de fechas | [GitHub](https://github.com/moment/moment) |
| bootstrap | Para la implementación de slider | [GitHub](https://github.com/twbs/bootstrap) |

# Configuraciones extras
Configuraciones extras realizadas al proyecto.

## Mejoras en las rutas de los imports
Normalmente los imports en ts son así:

```typescript
import { CarouselComponent } from '../../../components/carousel/carousel.component';
```

Es posible mejorarlos para que se vean así:

```typescript
import { CarouselComponent } from '~components/carousel/carousel.component';
```

Haciendo uso de la siguiente configuración, es necesario editar el archivo `tsconfig.json`:

```json
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        ...
    },
    ...
}
```

Cambiar el valor del `baseUrl` de "./" por "./src" y agregar la ruta de las carpetas que quieres resumir justo después de `baseUrl`:

```json
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            "~app/*": ["app/*"],
            "~models/*": ["app/models/*"],
            "~modules/*": ["app/modules/*"],
            "~pipes/*": ["app/pipes/*"],
            "~providers/*": ["app/providers/*"],
            "~utils/*": ["app/utils/*"],
            "~components/*": ["app/components/*"],
            "~environments": ["environments/environment"]
        },
        ...
    },
    ...
}
```

Con esto las rutas ya han sido configuradas correctamente.

## Implementación del plugin ngx-translate
TODO: Agregar descripción

### Instalación del plugin con NPM

```
$ npm install @ngx-translate/core --save
$ npm install @ngx-translate/http-loader --save
```

### Configurando el app.module

Luego en el `app.module.ts` agregamos los siguientes inports

```typescript
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
```

Seguido de los imports agregamos la siguiente función:
```typescript
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // esta es la ruta donde estaran los mensajes
}
```

Una vez importados los agregamos a los imports del módulo:

```typescript
@NgModule({
    ...,
    imports: [
        ...,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    ...
})
export class AppModule {}
```

### Creando los archivos para los messages

Dentro de la carpeta `./src/assets/` creamos una nueva carpeta llamada `i18n` y dentro de ella creamos el archivo o los archivos con el código del idioma a usar en formato.json, para este caso serán dos archivos `es.json` y `en.json`.

### Inicializando ngx-translate
Es necesario inicializar el plugin con un idioma por defecto, para hacerlo usaremos el archivo `app.component`, importaremos el provider de ngx-translate:

```typescript
    import { TranslateService } from '@ngx-translate/core';
```

Agregamos TranslateService al constructor:

```typescript
    constructor(
        ...,
        private translate: TranslateService,
        ...
    ) {
        this.initializeApp();
    }
```

Luego en el método `initializeApp()`:

```typescript
    this.translate.use('es');
    const DEFAULT_LANG = this.translate.currentLang;

    if (DEFAULT_LANG === 'es') {
        this.translate.setDefaultLang('es');
        this.translate.use('es');
    } else if (DEFAULT_LANG === 'en') {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
```

### Mostrando los mensajes
Primero en el archivo `es.json` agregamos un message así:

```json
    {
        "login.title": "Inicio de sesión"
    }
```

Luego se configurará el módulo de login con lazy load, en el módulo `login.module` se importa el siguiente módulo:
```typescript
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        ...
    ],
    imports: [
        ...,
        TranslateModule.forChild(),
        ...
    ]
})
export class LoginModule { }
```
Luego en el archivo `login.component` se importa el provider de translate y se agrega al constructor:

```typescript
import { TranslateService } from '@ngx-translate/core';

@Component({
    ...
})
export class LoginComponent implements OnInit {
    ...

    constructor(
        ...,
        public translate: TranslateService,
        ...
    ) {  }

    ...
}
```

> Nota: Se declara **public** porque las **private** o **protected** no son accesibles desde el html del componente, haciendo buen uso de las propiedades **private** y **public** es fácil identificar que variables o métodos se usan en el html y cuales sólo en el componente ts.

En el HTML usamos el pipe de **translate** y el key que se agregó al archivo `es.json`, en el archivo `login.component.html`:


```html
<h1>{{ 'login.title' | translate }}</h1>
```
