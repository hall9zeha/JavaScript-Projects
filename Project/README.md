# Webpack ESLint y Babel

Iniciar como siempre el proyecto con ```npm init```, luego instalar:

*  ```npm i --save-dev @babel/cli @babel/core @babel/preset-env ```
* ```npm i --save-dev webpack webpack-cli``` -> luego crear el archivo "webpack.config.js"
* ``` npm i --save-dev babel-loader  ``` -> para instalar el plugin de babel en webpack

# Ejecutar comandos

Para generar un archivo que pueda ser ejecutado en navegadores antiguos o que no soportan ES6 a más, se genera nuevos archivos a partir de un existenete con: ```npx babel entrada.js --out-file salida.js --presets=@babel/preset-env```.

una vez configuarado el archivo webpack.config.js con las direcciones de salida de los archivos transpilados, ejecutar:
* ```npm run webpack```

