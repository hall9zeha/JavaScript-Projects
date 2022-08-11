import React, {Fragment } from 'react'

function Header({title}){ //recibimos el elemento que le pasamos desde App.js
    //usamos destructuring en props y solo agregamos el nombre del argumento que pasamos

    //fuera del return se puede escribir código JS tradicional
    
    return(
        //sintaxis para cargar un props dentro de html
        <Fragment>
        <h1>{title}</h1>
       
        </Fragment>
    )
}

export default Header;