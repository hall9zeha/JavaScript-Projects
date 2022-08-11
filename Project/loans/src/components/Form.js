
import React, {Fragment,useState} from 'react'
import {calculateTotal} from '../utils'

const  Form = (props) => {
    const {amount,saveCount,term, saveTerm,  saveTotal, saveLoading} = props;
    //Definimos un state para mostrar un error

    const [error, saveError] =  useState(false);

    const calculateLoan = e =>{
        e.preventDefault()

        //validar campos vacíos
        if(amount ===0 || term ===''){
            saveError(true)
            return;
        }
        saveError(false)
        saveLoading(true)
        setTimeout(() => {
            const total = calculateTotal(amount,term)
            saveTotal(total)
            saveLoading(false)
        }, 3000);
        
        
    }
  
    return ( 
        <Fragment>
        <form  onSubmit={calculateLoan}>
         
            <div className="row">
                <div>
                    <label>Cantidad préstamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder='Ejemplo: 4000'
                        onChange={e=>saveCount(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para pagar</label>
                        <select
                        className="u-full-width"
                        onChange={e=>saveTerm(parseInt(e.target.value))}
                        >

                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="calcular"
                        className='button-primary u-full-width'
                    />
                </div>
            </div>
            
        </form> 
        {(error)? <p className="error">Todos los campos son obligatorios</p>:''}
        
        </Fragment>
     );
}
 
export default Form;