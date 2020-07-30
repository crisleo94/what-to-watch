## Inicio Rápido
Este proyecto usa Parcel como su bundler principal, dentro del mismo existen los siguiente comandos:

### `yarn install`
Una vez se tenga una copia local del proyecto se deberá ejecutar este comando para instalar los módulos necesarios para empezar a trabajar

### `npm start` o `yarn start`

Lanza la aplicación en modo desarrollo<br>
Abre el navegador en la siguiente dirección [http://localhost:1234](http://localhost:1234).

Parcel cuenta con hot-reload lo que permite ver los cambios en la página inmediatamente se guardan.<br>

### `npm run build` o `yarn build`

Crea un build list para producción dentro de la carpeta `dist`.<br>
Cambia la aplicación de React automáticamente a producción.

Una vez se ejecuta este comando la aplicación queda lista para ser desplegada.

## Trabajando con ramas
Dentro del proyecto existen dos ramas que son consideradas como las ramas principales, una es `master` y la otra es `develop`. Para añadir cualquier nueva funcionalidad al proyecto se deberá crear una rama nueva a partir de `develop`, en el cual se indicará el nombre del desarrollador, para la creación de la rama se siguen los siguientes pasos:

### `git checkout develop`
Una vez se hace clone de este repositorio, se ejecuta este comando para ir hacia la rama `develop`. Nota: El comando `git branch` será de ayuda para verificar en que rama se encuentra actualmente.

### `git branch nombre_branch && git checkout nombre_branch` o `git checkout -b nombre_branch`
Estos comandos son los usados para crear nuevas ramas a partir de la rama en la que se encuentre actualmente, una vez verifique que se encuentra en la nueva rama podrá comenzar con las características que se vayan a agregar

### Ramas `develop` y `master`
Estas ramas están bloquedas por defecto, una vez termine el trabajo sobre su rama deberá hacer el respectivo commit y push en su rama local, la que se creó en la instrucción anterior, una vez tenga los cambios listos se hará un pull request a la rama `develop`
