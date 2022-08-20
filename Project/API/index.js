const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes'); // como contiene un index.js no hay necesidad de ponerlo, JS lo leera automáticamente
//creamos el servidor
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


//escondemos la visibilidad de nuestra api con cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin:(origin, callback) => {
        const exist = whitelist.some(domain=> domain === origin);
        if(exist){
            callback(null,true)
        }
        else{
            callback(new Error('no permitido por CORS'))
        }
    }
}

//app.use(cors(corsOptions));
//
//pero mientras lo mantendremos abierto
app.use(cors());
// conectar a mongoDB

mongoose.Promise = global.Promise;
//Si nuestra base de datos es local

mongoose.connect('mongodb://localhost/vet',{//vet es el nombre de la base de datos
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify:false
})

//Habilitamos el body parser con express para leer los datos de los formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitamos el routing
app.use('/', routes())

//puerto del servidor y arranque

app.listen(4000, ()=>{
    console.log('Servidor funcionando')
})