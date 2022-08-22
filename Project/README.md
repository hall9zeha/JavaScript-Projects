# App full stack de citas de una veterinaria - Con Mongo db y express

- Mongo db
- Express
- React
- Electron 

# Instalar Backend
- Creamos una carpeta API dentro de esa carpeta crearemos todos los archivos de nuestro backend, e instalaremos las dependencias necesarias. 
- Inicializamos el proyecto con ```npm init ```
- ``` npm install express mongoose ``` -> Para realizar consultas a mongo db de una manera más sencilla, y para crear un servidor local con express.
- ``` npm install --save-dev nodemon ```
- ``` npm install axios ``` para consumir nuestra api hecha en mongodb

# Frontend 

- Creamos una carpeta "frontend" dentro de esa carpeta crearemos todos los archivos de nuestro backend, también las dependencias necesarias.
- Salimos de la carpeta API y en la raíz del proyecto creamos la app 'frontend' con react
``` npx create-react-app frontend ```

- ``` npm install react-router-dom ``` 
- ``` npm install cors ```
- ``` npm install sweetalert2 ```

# Desktop

- Inicializamos ``` npm init ``` dentro de la carpeta "Desktop" 
- Luego instalamos electrón ``` npm i -D electron@latest ```
- Instalamos una dependencia para crear los instalables en electrón
    -``` npm install --save-dev electron-builder ```
    - Luego en package.json añadir el script:
    - "dist": "electron-builder -l" 
    - En mi caso crearé un instalable para linux con la bandera "-l", (para windows: "-w" y para Mac " -m")  
- Finalmente ejecutar ``` npm run dist ```