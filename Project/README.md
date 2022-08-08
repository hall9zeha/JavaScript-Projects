# importante
usar el proyecto con nodeJS instalado, para poder instalar JEST,
inicializar el proyecto tipeando en la raiz del mismo desde la terminal:

* npm init  

Llenar el título del proyecto, descripción y aceptar los campos que se considere adecuado

luego

## instalar:

* npm i --save-dev jest
* npm i jest-environment-jsdom --save-dev

Se creará una carpeta "node_modules" y un archivo extra package-lock.json, que no se debe modificar.

Creamos una carpeta "__tests__" para poner los archivos testeables y ejecutamos desde la terminal
cualquiera de estos comandos
* npm t
* npm test 
* npm run test

El script de jest buscará en la carpeta __tests__ lo los archivos que hayamos puesto.
pero si se quiere poner un archivo de test en otro lugar de debe adjuntar el nombre de "test" al final del nombre completo: "nombre_archivo_test.js", y el script de jest lo detectará.





