# Testing con Cypress

Antes de todo se debe tener instalado NodeJS.
Creamos el archivo package.json escribiendo ```npm init``` e ingresando los datos que creamos correspondiente mientras nos lo solicite el script.

# Instalar

* Luego instalamos ```npm i --save-dev cypress```  

# Ejecutar

* Para ejecutar la versión de escritorio de cypress ```npx cypress open```, Esto abrirá cypres en el navegador predeterminado y para cerrar la ejecución ```ctrl + c```.
* ```npx cypress run``` ejecuta cypress en modo terminal.

Despues de ejecutar por primera vez cypress creará unos directorios con ejemplos y configuraciones. el lugar donde se podra crear nuestros propios test es en el directorio ```e2e```, dentro cada archivo de test debe tener aparte del nombre lo siguiente:
* first_test.cy.js -> Es importante que lleve el ".cy" despues del nombre, para que cypress lo reconozca.
