import React from 'react'
const Result = ({total,term,amount}) => {
    return ( 
<div className='u-full-width resultado'>
    <h2>Resumen</h2>
    <p>La cantidad solicitada es: $ {amount}</p>
    <p>A pagar en {term} Meses</p>
    <p>Su pago mensual es de: $ {(total / term).toFixed(2)}</p>
    <p>Total a pagar: $ {(total).toFixed(2)}</p>
</div>

    );
}
 
export default Result;