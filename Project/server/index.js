// const express = require('express'); versión common js
//versión actual hay que agregar al package.json la línea "type":"module", para que sepa de los imports
import express from 'express';
import router from '../routes/index.js'
import db from '../config/db.js';

import dotenv from 'dotenv';

dotenv.config({path: 'variables.env'})

const app = express()

//conectamos a la base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error=> console.log(error))



app.set('view engine', 'pug')

//Le pasamos el año actual al footer
app.use((req,res,next)=>{
    const year= new Date();
    res.locals.currentYear = year.getFullYear();
    return next();
})

//Agregar body parser para leer los datos del formulario testimoniales
app.use(express.urlencoded({extended:true}))

app.use('/',router)


/** puerto y host para la app */

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.use(express.static('public'))

app.listen(port, host, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})

