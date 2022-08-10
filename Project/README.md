# Webpack ESLint y Babel

Iniciar como siempre el proyecto con ```npm init```, luego instalar:

*  ```npm i --save-dev @babel/cli @babel/core @babel/preset-env ```
* ```npm i --save-dev webpack webpack-cli``` -> luego crear el archivo "webpack.config.js"
* ``` npm i --save-dev babel-loader  ``` -> para instalar el plugin de babel en webpack.
* ``` npm i --save-dev webpack-dev-server ``` -> para crear nuestro propio servidor

Para activar el observador o LiveReload (y el index.html se recargue cuando se haga un cambio en el código) en dev-server hubo que instalar ``` npm install --save-dev html-webpack-plugin ```, puede que sea un problema de versiones recientes de dev-server, o conflicto de librerías o dependencias. 

* ``` npm i --save-dev concurrently ``` -> para manejar watch y webpack-server al mismo tiempo
* Instalamos la extensión en vsCode de ESLint
* ``` npm i --save-dev eslint ````para nuestro proyecto -> creamos un archivo de eslint con ```npm init @eslint/config```, para l versión 8.21.0 y configuramos según nuestro proyecto. 
* Lo volvemos a ejecutar para instalar la guía de airbnb, para que nos muestre las recomendaciones
de como escribir código en JS

- Con slint estaremos agregando la guía de estilo de como escribir código en JS de airbnb

!Importante para ignorar ciertos archivos como webpack.config.js de las revisiones de eslint, debemos hacerlo en settings.js dentro de vsCode




# Ejecutar comandos

Para generar un archivo que pueda ser ejecutado en navegadores antiguos o que no soportan ES6 a más, se genera nuevos archivos a partir de un existenete con: ```npx babel entrada.js --out-file salida.js --presets=@babel/preset-env```.

una vez configuarado el archivo webpack.config.js con las direcciones de salida de los archivos transpilados, ejecutar:
* ```npm run webpack```

